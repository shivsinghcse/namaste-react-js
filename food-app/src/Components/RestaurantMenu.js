import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { CDN_URL } from '../../utils/constants';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    // console.log(resInfo);

    if (resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        totalRatingsString,
        areaName,
        sla,
        avgRating,
    } = resInfo?.cards[2]?.card?.card?.info;

    // console.log(resInfo?.cards[2]?.card?.card?.info);

    // const { itemCards } =
    //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //         ?.card;

    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.hasOwnProperty(
            'itemCards'
        )
            ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                  ?.card?.card
            : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                  ?.card?.card;

    // console.log(itemCards);

    if (itemCards == null || undefined) return <h1>Items not available....</h1>;

    return (
        <div className=" flex flex-col gap-y-10 w-[60%] mx-auto p-5 my-12">
            <h1 className="font-sans  text-2xl font-bold">{name}</h1>
            <section
                className="res-details"
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    // height: '100px',
                    borderRadius: '0.8rem',
                    border: '1px solid #ccc',
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 10px 10px 0px',
                    padding: '1rem',
                }}
            >
                <h3 className="text-lg font-bold">
                    <span className="text-green-700">&#9733;</span> {avgRating}{' '}
                    ({totalRatingsString}) - {costForTwoMessage}
                </h3>
                <h3 className="text-md font-semibold text-orange-600 underline cursor-pointer">
                    {cuisines.join(', ')}
                </h3>
                <div className="border-l-2 border-gray-400">
                    <h3 className="text-sm text-black font-semibold m-3">
                        Outlet{' '}
                        <span className="font-medium text-gray-400 mx-3">
                            {areaName}
                        </span>
                    </h3>
                    <h3 className="text-sm text-black font-semibold m-3">
                        {sla.slaString.toLowerCase()}
                    </h3>
                </div>
            </section>
            {/* TODO: Deals for you */}
            <h4 className="text-md text-gray-400 font-medium tracking-[0.5rem] mx-auto my-2">
                &larr;MENU&rarr;
            </h4>
            {/* TODO: search */}
            {/* TODO: filters */}
            {/* Accordino */}
            <div className="">
                <h3 className="text-xl font-bold my-4">
                    Recommended ({itemCards.length})
                </h3>
                <div className="item"></div>

                {itemCards.map((item) => {
                    return (
                        <div
                            className="border-b-2 pt-4 pb-8 flex justify-between"
                            key={item.card.info.id}
                        >
                            <div className="overflow-hidden w-[70%]">
                                <p>
                                    {item.card.info.itemAttribute
                                        .vegClassifier === 'VEG' ? (
                                        <span className="border-2 border-green-500 pb-[0.7px] rounded text-xs">
                                            🟢
                                        </span>
                                    ) : (
                                        <span className="border-2 border-red-500 pb-[0.7px] rounded text-xs">
                                            🔴
                                        </span>
                                    )}
                                    {item.card.info.ribbon.text !==
                                        undefined && (
                                        <span className="text-orange-500 font-medium mx-2">
                                            {item.card.info.ribbon.text}
                                        </span>
                                    )}
                                </p>
                                <p className="text-xl font-bold leading-4 mt-2">
                                    {item.card.info.name}{' '}
                                </p>
                                <p className="text-xl font-bold">
                                    Rs:{' '}
                                    {item.card.info.defaultPrice / 100 ||
                                        item.card.info.price / 100}
                                </p>
                                {item.card.info.ratings.aggregatedRating
                                    .rating != undefined && (
                                    <p className="my-2">
                                        <span className="text-green-700">
                                            &#9733;
                                        </span>
                                        {
                                            item.card.info.ratings
                                                .aggregatedRating.rating
                                        }
                                        (
                                        {
                                            item.card.info.ratings
                                                .aggregatedRating.ratingCountV2
                                        }
                                        )
                                    </p>
                                )}
                                <p className="text-lg font-medium text-gray-600 cursor-pointer">
                                    {item.card.info.description}
                                </p>
                            </div>

                            <div className="flex flex-col justify-center my-8 relative">
                                <img
                                    className="w-48 h-44 object-cover cursor-pointer rounded-xl "
                                    src={CDN_URL + item.card.info.imageId}
                                />
                                <button className="border-[1px] border-gray-300 bg-white w-32 py-2 rounded-lg text-md font-extrabold text-green-600 mx-auto absolute -bottom-5 left-8 z-1 shadow-md">
                                    ADD
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
