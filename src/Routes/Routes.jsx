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
                element: <HowItWorks/>
            },
            {
                path: 'ask-a-trade',
                element: <AskATrade/>
            },
            {
                path: 'register-as',
                element: <AccountCategory></AccountCategory>,
            },
            {
                path: 'admin/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: 'register-as/service-seeker',
                element: <ServiceSeeker/>

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
        element: <Login/>
    },
])

export default Routes;