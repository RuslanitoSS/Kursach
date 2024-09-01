import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./components/MainPage/MainPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.scss";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StudentsPage from "./components/StudentsPage/StudentsPage"
import EmployeePage from "./components/EmployeePage/EmployeePage.jsx"
import ProjectsPage from "./components/ProjectsPage/ProjectsPage"
import PersonPage from "./components/PersonPage/PersonPage";
import AdminPage from "./components/AdminPage/AdminPage";
import AuthPage from './components/AuthPage/AuthPage'
import CreatePage from './components/CreatePage/CreatePage.jsx'
import CreateProjectRoute from './routes/CreateProjectRoute/CreateProjectRoute.jsx'
import CreateEventRoute from './routes/CreateEventRoute/CreateEventRoute.jsx'
import EventsPage from './components/EventsPage/EventsPage'
import ActivityPage from './components/ActivityPage/ActivityPage'
import ActivitySetttingsPage from './components/ActivitySetttingsPage/ActivitySetttingsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "project",
        element: <CreateProjectRoute />,
      },      {
        path: "event",
        element: <CreateEventRoute />,
      },
    ]
  },
  {
    path: "/students",
    element: <StudentsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/employees",
    element: <EmployeePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/",
    element: <EventsPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:activityId",
    element: <ActivityPage type={'event'}/>,
    errorElement: <ErrorPage />,
  },  {
    path: "/events/:activityId/settings",
    element: <ActivitySetttingsPage type={'event'}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/:activityId",
    element: <ActivityPage type={'project'}/>,
    errorElement: <ErrorPage />,
  },{
    path: "/projects/:activityId/settings",
    element: <ActivitySetttingsPage type={'project'}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:userId",
    element: <PersonPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <AuthPage/>,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
