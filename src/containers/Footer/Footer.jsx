import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wraper">
      <div>
        <section className="footer-content">
          <ul className="footer-title-wrapper">
            <li className="footer-title">
              <h3 className="footer-title-item">Справка</h3>
            </li>
            <li className="footer-item">
              <a className="footer-link">Справочный центр</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Справочный форум</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Видеоуроки</a>
            </li>
          </ul>

          <ul className="footer-title-wrapper">
            <li className="footer-title">
              <h3 className="footer-title-item">Сообщество</h3>
            </li>
            <li className="footer-item">
              <a className="footer-link">Blogger Buzz</a>
            </li>
          </ul>

          <ul className="footer-title-wrapper">
            <li className="footer-title">
              <h3 className="footer-title-item">Разработчикам</h3>
            </li>
            <li className="footer-item">
              <a className="footer-link">API Blogger</a>
            </li>
            <li className="footer-item">
              <a className="footer-link">Форум разработчов</a>
            </li>
          </ul>
          
        </section>
        <div className="div-1">
          <div className="div-b"></div>
        </div>
        <section>
          <ul className="meta">
            <li className="footer-link-from-bellow-content">
              <a className="footer-link-from-bellow">Условия использования</a>
            </li>

            <li>
              <a className="footer-link-from-bellow">Конфиденциальность</a>
            </li>

            <li>
              <a className="footer-link-from-bellow">
                Политика в отношении содержания
              </a>
            </li>
          </ul>
          <div> </div>
          <div className="select-wrapper">
            <FormControl id='select-language' fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
              >
                <MenuItem id='language-inner' value={10}>Русский</MenuItem>
                <MenuItem id='language-inner' value={20}>English</MenuItem>
                <MenuItem  id='language-inner' value={30}>Spanish (Spain) - Español</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
