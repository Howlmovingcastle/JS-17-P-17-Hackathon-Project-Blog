import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "../../components/SideBar/SideBar.css";

const Header = ({ toolbar }) => {
  return (
    <div className="millions millions__item">
      <div className="text">
        <h2 className="text1">
          Присоединяйтесь к <br /> миллионам блогеров
        </h2>
        <span className="text2">
          В Blogger можно писать о чем угодно, например о <br /> погоде,
          последних новостях или интересных идеях. <br /> Зарегистрируйтесь – и
          вы узнаете, почему огромное <br /> число пользователей выбрали этот
          сервис.
        </span>

        <Link to="/home">
          <button className="btn">СОЗДАТЬ БЛОГ</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
