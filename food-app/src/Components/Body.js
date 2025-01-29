import RestaurantCard from './Restaurant';
import resList from '../../utils/mockData';
import { useState } from 'react';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="top-rated">
                <button
                    className="top-rated-btn"
                    onClick={() => {
                        // filter logic
                        const filteredList = listOfRestaurant.filter((res) => {
                            return res.info.avgRating > 4.5;
                        });
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => {
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
