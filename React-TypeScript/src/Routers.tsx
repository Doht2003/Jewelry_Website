import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./components/adminLayout";
import RootLayout from "./components/rootLayout";

const routers = createBrowserRouter([
    { 
        path: "/", 
        element: <RootLayout/>,
        children: [
            { path: "contact", element: "Contact Page"},
            { path: "products", element: "Products Page"}
        ]
    },
    { 
        path: "/admin", 
        element: <AdminLayout/>,
        children: [
            { path: "products", element: " Admin Products Page"}
        ]
    }
]);

export default routers;