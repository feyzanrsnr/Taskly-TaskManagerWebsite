import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import LoginPage from "../pages/login-page/LoginPage";
import RegisterPage from '../pages/register-page/RegisterPage'
import MainLayout from "../layouts/MainLayout/MainLayout";
import DashboardPage from "../pages/dashboard-page/DashboardPage";
import TasksPage from '../pages/tasks-page/TasksPage'
import PomodoroPage from '../pages/pomodoro-page/PomodoroPage'
import SettingsPage from '../pages/settings-page/SettingsPage'


const router = createBrowserRouter([
    
    {
        path:'/',
        element:<MainLayout/>,
        children: [
            {
                index:true,
                element:<DashboardPage/>
            },
            {
                path:'tasks',
                element:<TasksPage/>
            },
            {
                path:'pomodoro',
                element:<PomodoroPage/>
            },
            {
                path:'settings',
                element:<SettingsPage/>
            },
        ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'signup',
                element:<RegisterPage/>
            },
        ]
    }
]);

export default router