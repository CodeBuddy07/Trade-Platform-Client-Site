import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Pages/Home";
import Dashboard from "../Dashboard/Pages/Dashboard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

export default Routes;