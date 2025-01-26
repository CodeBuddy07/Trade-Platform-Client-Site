import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import AccountCategory from "../Pages/Registration/AccountCategory";
import ResetPassword from "../Components/ResetPassword";
import RegistrationTrade from "../Pages/Registration/RegistrationTrade";
import Dashboard from "../Dashboard/Pages/Dashboard";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import AskATrade from "../Pages/AskATrade/AskATrade";
import ServiceSeeker from "../Pages/Registration/ServiceSeeker";
import CustomerProfilePage from './../Dashboard/Pages/CustomerProfilePage/CustomerProfilePage';
import CustomerDashboard from "../Dashboard/Pages/CustomerProfilePage/CustomerDashboard";
import TradesDashboard from "../Dashboard/Pages/TradesProfilePage/TradesProfilePage/TradesDashboard";
import TradesProfilePage from "../Dashboard/Pages/TradesProfilePage/TradesProfilePage";
import AdminDashboard from "../Dashboard/Pages/AdminProfilePage/AdminDashboard";
import AdminProfilePage from "../Dashboard/Pages/AdminProfilePage/AdminProfilePage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'how-it-works',
                element: <HowItWorks />
            },
            {
                path: 'ask-a-trade',
                element: <AskATrade />
            },
            {
                path: 'register-as',
                element: <AccountCategory></AccountCategory>,
            },

            {
                path: 'register-as/service-seeker',
                element: <ServiceSeeker />

            },
            {
                path: 'register-as/trades-people',
                element: <RegistrationTrade></RegistrationTrade>

            },
            {
                path: 'account/password-reset',
                element: <ResetPassword></ResetPassword>

            },
        ]
    },
    {
        path: 'account/login',
        element: <Login />
    },



    // customer dashboard all routes
    {
        path: 'my-account',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard',
                element: <CustomerDashboard></CustomerDashboard>
            },
            {
                path: 'profile',
                element: <CustomerProfilePage></CustomerProfilePage>
            }
        ]
    },



    // trades-people dashboard all routes
    {
        path: 'my-trade-account',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard',
                element: <TradesDashboard></TradesDashboard>
            },
            {
                path: 'profile',
                element: <TradesProfilePage></TradesProfilePage>
            }
        ]
    },


    // admin dashboard all routes
    {
        path: 'admin',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'profile',
                element: <AdminProfilePage></AdminProfilePage>
            }
        ]
    },
])

export default Routes;