const { createBrowserRouter } = "react-router";

const router = createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout/>,
        children: [
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:'tasks',
                element:<Tasks/>
            },
        ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<SignUp/>
            },
        ]
    }
]);

export default router