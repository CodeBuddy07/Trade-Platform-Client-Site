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
import JobPostPage from "../Pages/JobPostPage/JobPostPage";
import CostGuides from "../Pages/CostGuides/CostGuides";
import PlanningToDesign from "../Pages/ErrorPage/PlanningToDesign";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<PlanningToDesign/>,
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
                path: 'post-job',
                element: <JobPostPage />
            },
            {
                path: 'cost-guides',
                element: <CostGuides/>
            },
            {
                path: 'register-as',
                element: <AccountCategory/>,
            },

            {
                path: 'register-as/service-seeker',
                element: <ServiceSeeker />

            },
            {
                path: 'register-as/trades-people',
                element: <RegistrationTrade/>

            },
            {
                path: 'account/password-reset',
                element: <ResetPassword/>

            },
        ]
    },
    {
        path: 'account/login',
        element: <Login/>
    },



    // customer dashboard all routes
    {
        path: 'my-account',
        element: <Dashboard/>,
        errorElement:<PlanningToDesign/>,
        children: [
            {
                path: 'dashboard',
                element: <CustomerDashboard/>
            },
            {
                path: 'profile',
                element: <CustomerProfilePage/>
            }
        ]
    },



    // trades-people dashboard all routes
    {
        path: 'my-trade-account',
        element: <Dashboard/>,
        // errorElement:<PlanningToDesign/>,
        children: [
            {
                path: 'dashboard',
                // element: <TradesDashboard/>
                element:<PlanningToDesign/>,

            },
            {
                path: 'profile',
                element: <TradesProfilePage/>
            }
        ]
    },


    // admin dashboard all routes
    {
        path: 'admin',
        element: <Dashboard/>,
        errorElement:<PlanningToDesign/>,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard/>
            },
            {
                path: 'profile',
                element: <AdminProfilePage/>
            }
        ]
    },
])

export default Routes;