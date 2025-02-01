import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        avgRating,
        costForTwo,
        cuisines,
        areaName,
        cloudinaryImageId,
    } = resData?.info;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo"
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                }}
            />
            <div
                className="res-details"
                style={{
                    lineHeight: 1.4,
                    paddingLeft: '10px',
                }}
            >
                <h3 style={{ marginTop: '5px' }}>{name}</h3>
                <h4
                    style={{
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#676A6D',
                    }}
                >
                    <span
                        style={{
                            color: 'green',
                        }}
                    >
                        &#9733;
                    </span>
                    {' ' + avgRating} | {resData.info.sla.slaString} |{' '}
                    {costForTwo}
                </h4>
                <h4
                    style={{
                        fontWeight: '500',
                        color: '#676A6D',
                    }}
                >
                    {cuisines.join(', ')}
                </h4>
                <h4
                    style={{
                        fontWeight: 'normal',
                        color: '#676A6D',
                    }}
                >
                    {areaName}
                </h4>
            </div>
        </div>
    );
};

export default RestaurantCard;
