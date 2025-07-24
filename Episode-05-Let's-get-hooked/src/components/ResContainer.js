import {useState} from "react";
import ResCard from "./ResCard";
import resList from "../utils/mockData";
import TopRatedRestaurant from "./TopRatedRestaurant";

const ResContainer = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

   const topRatedRestaurantList = () => {
    const filteredListOfRestaurant = resList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.1;

    });
    setListOfRestaurant(filteredListOfRestaurant);
  };


  return (
    <>
      <div className="res-container">
        <div className="features">
          <TopRatedRestaurant onFilter = {topRatedRestaurantList}/>
        </div>
        <div className="restaurants">
          {listOfRestaurant.map((resData) => {
          return <ResCard key={resData.info.id} resData={resData} />;
        })}
        </div>
      </div>
    </>
  );
};

export default ResContainer;
