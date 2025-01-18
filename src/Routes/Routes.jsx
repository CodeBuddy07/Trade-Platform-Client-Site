import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/HomePage/Login/Login";
import AccountCategory from "../Pages/Registration/AccountCategory";
import Property_Owner from "../Pages/Registration/Property_Owner";

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
                path: 'account/login',
                element: <Login></Login>
            },
            {
                path: 'register-as',
                element: <AccountCategory></AccountCategory>,
               

            },
            {
                path: 'register-as/property-owner',
                element: <Property_Owner></Property_Owner>

            },
        ]
    }
])

export default Routes;