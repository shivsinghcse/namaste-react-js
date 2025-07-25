import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import TopRatedFilterButton from "./TopRatedFilterButton.js";
import SearchFeature from "./SearchFeature";

const ResContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const filterOnSearch = (searchText) => {
    // console.log(searchText.length);
    // console.log("seaarched")
    const filteredListOfRestaurant = listOfRestaurant.filter(
      (restaurant) =>
        restaurant?.info?.name
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        restaurant?.info?.cuisines
          .join()
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setFilterRestaurants(filteredListOfRestaurant);
    // console.log(filteredListOfRestaurant)
    
  };

  const topRatedRestaurantList = () => {
    const filteredListOfRestaurant = listOfRestaurant.filter((restaurant) => {
      return restaurant.info.avgRating > 4.4;
    });
    setFilterRestaurants(filteredListOfRestaurant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4869429&lng=77.071083&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(restaurants);
      setFilterRestaurants(restaurants);
      // console.log(json);
      console.log(restaurants[0]);
    } catch (err) {
      console.error("Failed to fetch restaurant data", err);
    }
  };

  // conditional rendering
  // if (filterRestaurants.length === 0) {
  //   return <h1>Loading....</h1>;
  // }

  return filterRestaurants.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <>
      <div className="res-container">
        <div className="features">
          <SearchFeature onSearch={filterOnSearch} />
          <TopRatedFilterButton onFilter={topRatedRestaurantList} />
        </div>
        <div className="restaurants">
          {filterRestaurants.map((resData) => {
            return <ResCard key={resData.info.id} resData={resData} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ResContainer;
