const ResCard = (props) => {
  // const {resData} = props;
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    props.resData.info;
  // console.log(props.resData.info);
  // console.log(name)
  return (
    <>
      <div className="res-card">
        <div className="res-img">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="res-image"
          />
        </div>
        <div className="res-details">
          <h3>{name}</h3>
          <h4>Rating - {avgRating}</h4>
          <h4>Delivery Time : {sla.slaString}</h4>
          <p>{cuisines.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default ResCard;
