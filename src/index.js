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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
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
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students/:id",
    element: <PersonPage type="student"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/staff/:id",
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
