import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import FoodImageCarousal from './FoodImageCarousal';
// import mockData, { resList } from '../../utils/mockData';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inMinds, setInMinds] = useState([]);
    console.log('body rendered');
    // console.log(listOfRestaurant);

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(useState());

    const fetchData = async () => {
        const url =
            'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);

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

        setInMinds(
            json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );

        // console.log( json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    };

    console.log(inMinds);

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
                                    return res.info.avgRating > 4;
                                }
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div
                className="in-minds"
                style={{
                    width: '90%',
                    // border: '10px solid red',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="carousal-titel">
                    <h1
                        className="title"
                        style={{
                            padding: '1rem',
                            fontWeight: 600,
                        }}
                    >
                        What's on your mind?
                    </h1>
                </div>
                <div
                    className="carousal-cuisines"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {inMinds.map((items) => {
                        return <FoodImageCarousal resData={items} />;
                    })}
                </div>
            </div>
            <div className="res-container-body">
                <div className="top-res-chain-title">
                    <h1  style={{
                            padding: '1rem',
                            fontWeight: 600,
                        }}>Top restaurant chains in Lucknow</h1>
                </div>
                <div className="res-container">
                    {filteredRestaurant.map((restaurant) => {
                        return (
                            <Link
                                key={restaurant.info.id}
                                to={'/restaurant/' + restaurant.info.id}
                            >
                                <RestaurantCard
                                    key={restaurant.info.id}
                                    resData={restaurant}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Body;
