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
import TradesProfilePage from "../Dashboard/Pages/TradesProfilePage/TradesProfilePage";
import AdminDashboard from "../Dashboard/Pages/AdminProfilePage/AdminDashboard/AdminDashboard";
import AdminProfilePage from "../Dashboard/Pages/AdminProfilePage/AdminProfilePage/AdminProfilePage";
import JobPostPage from "../Pages/JobPostPage/JobPostPage";
import CostGuides from "../Pages/CostGuides/CostGuides";
import PlanningToDesign from "../Pages/ErrorPage/PlanningToDesign";
import JobPage from "../Dashboard/Pages/TradesProfilePage/JobPage/JobPage";
import JobDetailsPage from "../Dashboard/Pages/TradesProfilePage/JobPage/Components/JobDetailsPage";
import TradesPublicProfile from "../Pages/TradesPublicProfile/TradesPublicProfile";
import SettingsPage from './../Dashboard/Pages/TradesProfilePage/SettingsPage/SettingsPage';
import Account from "../Dashboard/Pages/TradesProfilePage/SettingsPage/Components/Account";
import Preferences from "../Dashboard/Pages/TradesProfilePage/SettingsPage/Components/Preferences";
import BillingPage from "../Dashboard/Pages/TradesProfilePage/BillingPage/BillingPage";
import ProtectedRoute from "../Authentication/ProtectedRoute";
import CreditsPage from "../Dashboard/Pages/TradesProfilePage/CreditsPage/CreditsPage";
import MembershipPage from "../Dashboard/Pages/TradesProfilePage/MembershipPage/MembershipPage";
import ManageTradesPeople from "../Dashboard/Pages/AdminProfilePage/ManageTradesPeople/ManageTradesPeople";
import ManageCustomers from "../Dashboard/Pages/AdminProfilePage/ManageCustomers/ManageCustomers";
import ManageJobs from "../Dashboard/Pages/AdminProfilePage/ManageJobs/ManageJobs";
import ManageTrades from "../Dashboard/Pages/AdminProfilePage/Manage Trades/ManageTrades";
import ManageMembershipPackage from "../Dashboard/Pages/AdminProfilePage/ManageMembershipPackage/ManageMembershipPackage";
import ManageCredits from "../Dashboard/Pages/AdminProfilePage/ManageCredits/ManageCredits";
import MessagePage from "../Dashboard/Pages/MessagePage/MessagePage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
                element: <CostGuides />
            },
            {
                path: 'register-as',
                element: <AccountCategory />,
            },

            {
                path: 'register-as/service-seeker',
                element: <ServiceSeeker />

            },
            {
                path: 'register-as/trades-people',
                element: <RegistrationTrade />

            },
            {
                path: 'trades/profile',
                element: <TradesPublicProfile />
            },
            {
                path: 'account/password-reset',
                element: <ResetPassword />

            },
        ]
    },
    {
        path: 'account/login',
        element: <Login />
    },



    // customer dashboard all routes
    {
        path: 'customer',
        element: <ProtectedRoute requiredRole={["customer"]} ><Dashboard /></ProtectedRoute>,
        children: [
            {
                path: 'profile',
                element: <CustomerProfilePage />
            },
            {
                path: 'dashboard',
                element: <CustomerDashboard />
            },
            {
                path: 'message',
                element: <MessagePage />
            },
        ]
    },



    // trades-people dashboard all routes
    {
        path: 'tradePerson',
        element: <ProtectedRoute requiredRole={["tradePerson"]} ><Dashboard /></ProtectedRoute>,
        // errorElement:<PlanningToDesign/>,
        children: [
            {
                path: 'dashboard',
                // element: <TradesDashboard/>
                element: <PlanningToDesign />,

            },
            {
                path: 'profile',
                element: <TradesProfilePage />
            },
            {
                path: 'message',
                element: <MessagePage />
            },

            {
                path: 'jobs',
                element: <JobPage />
            },
            {
                path: 'credits',
                element: <CreditsPage />
            },
            {
                path: 'membership',
                element: <MembershipPage />
            },
            {
                path: 'billing',
                element: <BillingPage />
            },
            {
                path: 'jobs/:id',
                element: <JobDetailsPage />
            },
            {
                path: 'settings',
                element: <SettingsPage />,
                children: [
                    {
                        path: 'account',
                        element: <Account />
                    },
                    {
                        path: 'preferences',
                        element: <Preferences />
                    },
                ]
            },

        ]
    },


    // admin dashboard all routes
    {
        path: 'admin',
        element: <ProtectedRoute requiredRole={["admin"]} ><Dashboard /></ProtectedRoute>,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'profile',
                element: <AdminProfilePage />
            },
            {
                path: 'manage_trades_peoples',
                element: <ManageTradesPeople />
            },
            {
                path: 'manage_customers',
                element: <ManageCustomers />
            },
            {
                path: 'manage_jobs',
                element: <ManageJobs />
            },
            {
                path: 'manage_jobs/:id',
                element: <JobDetailsPage />
            },
            {
                path: 'manage_trades',
                element: <ManageTrades />
            },
            {
                path: 'manage_credits',
                element: <ManageCredits />
            },
            {
                path: 'manage_membership_packages',
                element: <ManageMembershipPackage />
            },
        ]
    },
])

export default Routes;