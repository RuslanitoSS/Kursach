import { Link } from "react-router-dom";
import logoSrc from "../header/лого.svg";

export default function ErrorPage() {
  return (
    <div className="wrapper error-page">

      <h1>Ууупс... что-то пошло не по плану</h1>
      <h2>
        Ошибка <span> 404 </span>
      </h2>
      <p>Страница не найдена</p>
      <Link to="/" >Главная</Link>
    </div>
  );
}
