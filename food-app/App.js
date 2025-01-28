import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 *  Header
 *  - Logo
 *  - Nav Items
 *  Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star rating, cuisine, delivery time
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({ resName, cuisine }) => {
    // const { resName, cuisine } = props;
    // console.log(props);

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ebfc6a45deec38c12d1acd23fe9a8cef"
                alt="res-logo"
                style={{
                    width: '100%',
                    height: '65%',
                }}
            />
            <div
                className="res-details"
                style={{
                    lineHeight: 1.4,
                    paddingLeft: '10px',
                }}
            >
                <h3 style={{ marginTop: '5px' }}>{resName}</h3>
                <h4
                    style={{
                        fontWeight: '600',
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
                    4.3 | 25-50 mins
                </h4>
                <h4
                    style={{
                        fontWeight: '500',
                        color: '#676A6D',
                    }}
                >
                    {cuisine}
                </h4>
                <h4
                    style={{
                        fontWeight: 'normal',
                        color: '#676A6D',
                    }}
                >
                    Aliganj
                </h4>
            </div>
        </div>
    );
};



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    resName="Punjabi Dhaba (Aliganj)"
                    cuisine="Thalis, North Indian, Biryani"
                />
                <RestaurantCard
                    resName="Pizza Hut"
                    cuisine="Pizzas, Burger, Fast Food"
                />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
