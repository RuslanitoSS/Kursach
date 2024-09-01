import { NavLink, Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={"nav__el"}
            to="/#about"
            end
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"nav__el"}
            to="/projects"
            end
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"nav__el"}
            to="/events"
            end
          >
           Мероприятия
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"nav__el"}
            to="/students"
            end
          >
            Студенты
          </NavLink>
        </li>
        <li>

          <Link className="nav__el" to="/">
          Контакты
          </Link>
          {/* <NavLink
            className={"nav__el"}
            to="/"
          >
            Контакты
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
