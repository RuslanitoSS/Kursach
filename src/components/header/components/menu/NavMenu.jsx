import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(isActive) => {
              return isActive ? "nav__el active" : "nav__el";
            }}
            to="/#about"
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => {
              return isActive ? "nav__el active" : "nav__el";
            }}
            to="/projects"
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => {
              return isActive ? "nav__el active" : "nav__el";
            }}
            to="/events"
          >
           Мероприятия
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => {
              return isActive ? "nav__el active" : "nav__el";
            }}
            to="/students"
          >
            Студенты
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => {
              return isActive ? "nav__el active" : "nav__el";
            }}
            to="/"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
