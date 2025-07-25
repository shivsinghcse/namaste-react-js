
const TopRatedFilterButton = ({onFilter}) => { 
  return (
    <>
      <button type="button" className="topRated-btn"  onClick={onFilter}>
        Top Rated Restaurant
      </button>
    </>
  );
};

export default TopRatedFilterButton;
