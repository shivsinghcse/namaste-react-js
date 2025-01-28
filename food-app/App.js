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

const RestaurantCard = (props) => {
    // const { resName, cuisine } = props;
    // console.log(props);
    // console.log(props.resData.info);
    // console.log(props);

    const { resData } = props;
    console.log(resData);

    // const data = props.resData.info;
    // console.log(data);

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/' +
                    resData.info.cloudinaryImageId
                }
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
                <h3 style={{ marginTop: '5px' }}>{resData.info.name}</h3>
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
                    {' '+resData.info.avgRating} | {resData.info.sla.slaString} |{' '}
                    {resData.info.costForTwo}
                </h4>
                <h4
                    style={{
                        fontWeight: '500',
                        color: '#676A6D',
                    }}
                >
                    {resData.info.cuisines.join(', ')}
                </h4>
                <h4
                    style={{
                        fontWeight: 'normal',
                        color: '#676A6D',
                    }}
                >
                    {resData.info.areaName}
                </h4>
            </div>
        </div>
    );
};

const resObj = {
    // restaurants: [
    //     {
    //         info: {
    //             id: '60379',
    //             name: 'Pizza Hut',
    //             cloudinaryImageId:
    //                 'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a2d988f2-df13-4daf-8b29-4e5562e2c2d7_60379.jpg',
    //             locality: 'Saharaganj Mall',
    //             areaName: 'Hazratganj',
    //             costForTwo: '₹350 for two',
    //             cuisines: ['Pizzas'],
    //             avgRating: 4.3,
    //             parentId: '721',
    //             avgRatingString: '4.3',
    //             totalRatingsString: '2.7K+',
    //             sla: {
    //                 deliveryTime: 30,
    //                 lastMileTravel: 1.8,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '30-35 mins',
    //                 lastMileTravelString: '1.8 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-28 23:00:00',
    //                 opened: true,
    //             },
    //             badges: {
    //                 imageBadges: [
    //                     {
    //                         imageId: 'Rxawards/_CATEGORY-Pizza.png',
    //                         description: 'Delivery!',
    //                     },
    //                 ],
    //             },
    //             isOpen: true,
    //             aggregatedDiscountInfoV2: {},
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: 'Delivery!',
    //                                     imageId: 'Rxawards/_CATEGORY-Pizza.png',
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '--',
    //                 },
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/pizza-hut-saharaganj-mall-hazratganj-rest60379',
    //             type: 'WEBLINK',
    //         },
    //     },
    //     {
    //         info: {
    //             id: '636723',
    //             name: 'Chinese Wok',
    //             cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
    //             locality: 'Mahanagar',
    //             areaName: 'Mahanagar',
    //             costForTwo: '₹250 for two',
    //             cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
    //             avgRating: 4.3,
    //             parentId: '61955',
    //             avgRatingString: '4.3',
    //             totalRatingsString: '1.5K+',
    //             sla: {
    //                 deliveryTime: 31,
    //                 lastMileTravel: 3.6,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '30-35 mins',
    //                 lastMileTravelString: '3.6 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-29 01:00:00',
    //                 opened: true,
    //             },
    //             badges: {},
    //             isOpen: true,
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {},
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: 'ITEMS',
    //                 subHeader: 'AT ₹129',
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '3.3',
    //                     ratingCount: '48',
    //                 },
    //                 source: 'GOOGLE',
    //                 sourceIconImageId:
    //                     'v1704440323/google_ratings/rating_google_tag',
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/chinese-wok-mahanagar-rest636723',
    //             type: 'WEBLINK',
    //         },
    //     },
    //     {
    //         info: {
    //             id: '59654',
    //             name: 'Subway',
    //             cloudinaryImageId:
    //                 'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/567bae2d-7b43-41ad-aeb6-4ff87bfe5ba5_59654.JPG',
    //             locality: 'Hazratganj',
    //             areaName: 'Hazratganj',
    //             costForTwo: '₹350 for two',
    //             cuisines: ['sandwich', 'Salads', 'wrap', 'Healthy Food'],
    //             avgRating: 4.4,
    //             parentId: '2',
    //             avgRatingString: '4.4',
    //             totalRatingsString: '15K+',
    //             sla: {
    //                 deliveryTime: 23,
    //                 lastMileTravel: 0.9,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '20-25 mins',
    //                 lastMileTravelString: '0.9 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-29 04:00:00',
    //                 opened: true,
    //             },
    //             badges: {
    //                 imageBadges: [
    //                     {
    //                         imageId: 'bolt/Bolt%20Listing%20badge@3x.png',
    //                         description: 'bolt!',
    //                     },
    //                 ],
    //             },
    //             isOpen: true,
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: 'bolt!',
    //                                     imageId:
    //                                         'bolt/Bolt%20Listing%20badge@3x.png',
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: 'ITEMS',
    //                 subHeader: 'AT ₹119',
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '4.1',
    //                     ratingCount: '2.2K+',
    //                 },
    //                 source: 'GOOGLE',
    //                 sourceIconImageId:
    //                     'v1704440323/google_ratings/rating_google_tag',
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/subway-hazratganj-rest59654',
    //             type: 'WEBLINK',
    //         },
    //     },
    //     {
    //         info: {
    //             id: '636391',
    //             name: 'Baskin Robbins - Ice Cream Desserts',
    //             cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
    //             locality: 'Park Road',
    //             areaName: 'Sapru Marg',
    //             costForTwo: '₹250 for two',
    //             cuisines: ['Desserts', 'Ice Cream'],
    //             avgRating: 4.5,
    //             veg: true,
    //             parentId: '5588',
    //             avgRatingString: '4.5',
    //             totalRatingsString: '245',
    //             sla: {
    //                 deliveryTime: 21,
    //                 lastMileTravel: 0.8,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '20-25 mins',
    //                 lastMileTravelString: '0.8 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-29 03:00:00',
    //                 opened: true,
    //             },
    //             badges: {
    //                 imageBadges: [
    //                     {
    //                         imageId: 'bolt/Bolt%20Listing%20badge@3x.png',
    //                         description: 'bolt!',
    //                     },
    //                     {
    //                         imageId:
    //                             'Green%20Dot%20Awards/Best%20In%20Ice%20cream.png',
    //                         description: 'Delivery!',
    //                     },
    //                 ],
    //             },
    //             isOpen: true,
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: 'bolt!',
    //                                     imageId:
    //                                         'bolt/Bolt%20Listing%20badge@3x.png',
    //                                 },
    //                             },
    //                             {
    //                                 attributes: {
    //                                     description: 'Delivery!',
    //                                     imageId:
    //                                         'Green%20Dot%20Awards/Best%20In%20Ice%20cream.png',
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: '50% OFF',
    //                 subHeader: 'UPTO ₹90',
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '--',
    //                 },
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/baskin-robbins-ice-cream-desserts-park-road-sapru-marg-rest636391',
    //             type: 'WEBLINK',
    //         },
    //     },
    //     {
    //         info: {
    //             id: '367778',
    //             name: 'Burger Singh (Big Punjabi Burgers)',
    //             cloudinaryImageId: '972a37599772cdc7df93a0855ad87591',
    //             locality: 'Gomti Nagar',
    //             areaName: 'Gomti Nagar',
    //             costForTwo: '₹300 for two',
    //             cuisines: [
    //                 'American',
    //                 'Beverages',
    //                 'Desserts',
    //                 'Snacks',
    //                 'Indian',
    //             ],
    //             avgRating: 4.3,
    //             parentId: '375065',
    //             avgRatingString: '4.3',
    //             totalRatingsString: '8.1K+',
    //             sla: {
    //                 deliveryTime: 34,
    //                 lastMileTravel: 7.6,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '30-35 mins',
    //                 lastMileTravelString: '7.6 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-29 05:00:00',
    //                 opened: true,
    //             },
    //             badges: {},
    //             isOpen: true,
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {},
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: 'ITEMS',
    //                 subHeader: 'AT ₹98',
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '4.0',
    //                     ratingCount: '238',
    //                 },
    //                 source: 'GOOGLE',
    //                 sourceIconImageId:
    //                     'v1704440323/google_ratings/rating_google_tag',
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/burger-singh-big-punjabi-burgers-gomti-nagar-rest367778',
    //             type: 'WEBLINK',
    //         },
    //     },
    //     {
    //         info: {
    //             id: '231204',
    //             name: 'Burger King',
    //             cloudinaryImageId:
    //                 'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c3b37a65-3b1e-4203-a759-f1d2c828dcf9_231204.jpg',
    //             locality: 'Hazratganj',
    //             areaName: 'Hazratganj',
    //             costForTwo: '₹350 for two',
    //             cuisines: ['Burgers', 'American'],
    //             avgRating: 4.4,
    //             parentId: '166',
    //             avgRatingString: '4.4',
    //             totalRatingsString: '26K+',
    //             sla: {
    //                 deliveryTime: 15,
    //                 lastMileTravel: 0.2,
    //                 serviceability: 'SERVICEABLE',
    //                 slaString: '15-20 mins',
    //                 lastMileTravelString: '0.2 km',
    //                 iconType: 'ICON_TYPE_EMPTY',
    //             },
    //             availability: {
    //                 nextCloseTime: '2025-01-29 05:00:00',
    //                 opened: true,
    //             },
    //             badges: {
    //                 imageBadges: [
    //                     {
    //                         imageId: 'bolt/Bolt%20Listing%20badge@3x.png',
    //                         description: 'bolt!',
    //                     },
    //                     {
    //                         imageId: 'Rxawards/_CATEGORY-Burger.png',
    //                         description: 'Delivery!',
    //                     },
    //                 ],
    //             },
    //             isOpen: true,
    //             type: 'F',
    //             badgesV2: {
    //                 entityBadges: {
    //                     imageBased: {
    //                         badgeObject: [
    //                             {
    //                                 attributes: {
    //                                     description: 'bolt!',
    //                                     imageId:
    //                                         'bolt/Bolt%20Listing%20badge@3x.png',
    //                                 },
    //                             },
    //                             {
    //                                 attributes: {
    //                                     description: 'Delivery!',
    //                                     imageId:
    //                                         'Rxawards/_CATEGORY-Burger.png',
    //                                 },
    //                             },
    //                         ],
    //                     },
    //                     textBased: {},
    //                     textExtendedBadges: {},
    //                 },
    //             },
    //             aggregatedDiscountInfoV3: {
    //                 header: '60% OFF',
    //                 subHeader: 'UPTO ₹120',
    //             },
    //             differentiatedUi: {
    //                 displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
    //                 differentiatedUiMediaDetails: {
    //                     lottie: {},
    //                     video: {},
    //                 },
    //             },
    //             reviewsSummary: {},
    //             displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
    //             restaurantOfferPresentationInfo: {},
    //             externalRatings: {
    //                 aggregatedRating: {
    //                     rating: '4.4',
    //                     ratingCount: '5.9K+',
    //                 },
    //                 source: 'GOOGLE',
    //                 sourceIconImageId:
    //                     'v1704440323/google_ratings/rating_google_tag',
    //             },
    //             ratingsDisplayPreference:
    //                 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    //         },
    //         analytics: {
    //             context: 'seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee',
    //         },
    //         cta: {
    //             link: 'https://www.swiggy.com/city/lucknow/burger-king-hazratganj-rest231204',
    //             type: 'WEBLINK',
    //         },
    //     },
    // ],

    "info": {
                      "id": "65085",
                      "name": "Mughal Zaika Aminabad",
                      "cloudinaryImageId": "yood4aumr1wbxed1odxk",
                      "locality": "Aminabad",
                      "areaName": "Aminabad",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Mughlai",
                        "Biryani",
                        "Kebabs"
                      ],
                      "avgRating": 4.4,
                      "parentId": "140984",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "78K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-29 01:10:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                            "description": "Delivery!"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "Ratnesh_Badges/test2.png",
                            "shortDescription": "Perfect ice cream delivery",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "Ratnesh_Badges/test2.png",
                                  "shortDescription": "Perfect ice cream delivery"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "940"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-0864c1ce-c124-422c-a7b2-9450b49087ee"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/mughal-zaika-aminabad-aminabad-rest65085",
                      "type": "WEBLINK"
                    }
                  
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
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
