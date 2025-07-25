import { resImage_CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  // const {resData} = props;
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    props?.resData?.info || {};
  // console.log(props.resData.info);
  // console.log(name)
  return (
    <>
      <div className="res-card">
        <div className="res-img">
          <img src={resImage_CDN_URL + cloudinaryImageId} alt={`${name} image`} loading="lazy" />
        </div>
        <div className="res-details">
          <h3>{name || "Unnamed Restaurant"} </h3>
          <h4>Rating - {avgRating ?? "N/A"}</h4>
          <h4>Delivery Time : {sla.slaString || "N/A"}</h4>
          <p>{cuisines.join(", ") || "Cuisines not available"}</p>
        </div>
      </div>
    </>
  );
};

export default ResCard;
