import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./components/MainPage/MainPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.scss";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StudentsPage from "./components/StudentsPage/StudentsPage"
import StaffPage from "./components/StaffPage/StaffPage"
import EventsPage from "./components/EventsPage/EventsPage"
import ProjectsPage from "./components/ProjectsPage/ProjectsPage"
import PersonPage from "./components/PersonPage/PersonPage";
import AdminPage from "./components/AdminPage/AdminPage";
import AuthPage from './components/AuthPage/AuthPage'
import CreatePage from './components/CreatePage/CreatePage.jsx'
import CreateProjectRoute from './routes/CreateProjectRoute/CreateProjectRoute.jsx'
import CreateEventRoute from './routes/CreateEventRoute/CreateEventRoute.jsx'
import EventPage from './components/EventPage/EventPage.jsx'
import ProjectPage from './components/ProjectPage/ProjectPage.jsx'

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
    path: "/staff",
    element: <StaffPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/",
    element: <EventsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:eventId",
    element: <EventPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/:projectid",
    element: <ProjectPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students/:studentId",
    element: <PersonPage type="student"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/staff/:staffId",
    element: <PersonPage type="staff"/>,
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
