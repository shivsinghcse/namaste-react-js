import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PageNotFount from './Components/PageNotFount';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantMenu from './Components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <PageNotFount />,
    },
    // {
    //     path: '*',
    //     element: <PageNotFount />,
    // },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
