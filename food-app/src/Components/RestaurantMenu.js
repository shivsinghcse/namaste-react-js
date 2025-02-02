import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { CDN_URL } from '../../utils/constants';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);

    if (resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        totalRatingsString,
        areaName,
        sla,
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
        <div
            className="menu"
            style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '2.5rem',
                width: '80%',
                margin: '3rem auto',
                border: '1px solid #000',
                padding: '1rem',
            }}
        >
            <h1
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '1.5rem',
                }}
            >
                {name}
            </h1>
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
                <h3>
                    ⭐{totalRatingsString} - {costForTwoMessage}
                </h3>
                <h3>{cuisines.join(', ')}</h3>
                <h3>Outlet - {areaName}</h3>
                <h3>{sla.slaString}</h3>
            </section>
            {/* TODO: Deals for you */}
            <h4>Menu</h4>
            {/* TODO: search */}
            {/* TODO: filters */}
            <div>
                <h3>Recommended ()</h3>
                <div className="item"></div>
            </div>

            {itemCards.map((item) => {
                return (
                    <div
                        style={{
                            borderBottom: '1px solid #ccc',
                            padding: '1.5rem 0',
                        }}
                        key={item.card.info.id}
                    >
                        <p>
                            {item.card.info.itemAttribute.vegClassifier ===
                            'VEG'
                                ? '🟢'
                                : '🔴'}
                        </p>
                        <p>{item.card.info.name} </p>
                        <p>
                            Rs:{' '}
                            {item.card.info.defaultPrice / 100 ||
                                item.card.info.price / 100}
                        </p>
                        <p>{item.card.info.description}</p>

                        <div>
                            <img
                                style={{
                                    width: '180px',
                                    height: '180px',
                                    borderRadius: '1rem',
                                }}
                                src={CDN_URL + item.card.info.imageId}
                            />
                            <button>ADD</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
