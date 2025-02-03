import { CDN_URL } from '../../utils/constants';

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
        <div className="res-card rounded-xl w-60 hover:bg-red-3 hover:scale-95">
            <div className="w-60 h-40">
                <img
                    className="res-logo w-60 h-40 object-cover rounded-2xl"
                    src={CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                />
            </div>
            <div className="res-details p-2 w-60">
                <h4 className="text-lg font-bold m-1 truncate">{name}</h4>
                <p className="text-md font-semibold text-black-500 truncate">
                    <span className="text-green-700">&#9733;</span>
                    {' ' + avgRating} | {resData.info.sla.slaString} |{' '}
                    {costForTwo}
                </p>
                <p className="truncate">{cuisines.join(', ')}</p>
                <p>{areaName}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
