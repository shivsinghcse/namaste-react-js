import RestaurantCard from './Restaurant';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
// import mockData, { resList } from '../../utils/mockData';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    console.log('body rendered');

    const fetchData = async () => {
        const url =
            'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const response = await fetch(url);
        const json = await response.json();
        setListOfRestaurant(
            // optional chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            // optional chaining
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );

        // try {
        //     const response = await fetch(url);
        //     if (!response.ok) {
        //         throw new Error(`Response status: ${response.status}`);
        //     }

        //     const json = await response.json();

        //     setListOfRestaurant(
        //         // optional chaining
        //         json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //             ?.restaurants
        //     );
        // } catch (error) {
        //     console.error(error.message);
        // }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        value={searchText}
                        placeholder="search...."
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            // Filter the restaurant card and update the UI
                            // search text
                            console.log(searchText);
                            const filteredList = listOfRestaurant.filter(
                                (res) => {
                                    return res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase());
                                }
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="top-rated">
                    <button
                        className="top-rated-btn"
                        onClick={() => {
                            // filter logic
                            const filteredList = listOfRestaurant.filter(
                                (res) => {
                                    return res.info.avgRating > 4.3;
                                }
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
