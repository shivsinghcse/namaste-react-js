
const TopRatedRestaurant = ({onFilter}) => { 
  return (
    <>
      <button className="topRated-btn"  onClick={onFilter}>
        Top Rated Restaurant
      </button>
    </>
  );
};

export default TopRatedRestaurant;
