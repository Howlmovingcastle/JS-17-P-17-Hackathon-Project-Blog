import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact contact-container">
      <div className="content-contact">
        <h1 className="h1_contact"> Контакты</h1>
        <div>
          <div>
            <p>
              Телефон службы поддержки:{" "}
              <a href="tel:+996554280004">0554280004</a>
            </p>
            <p>
              Звонок по Кыргызстану и Россий бесплатный ежедневно с 00:00 до
              23:59 по бишкекскому времени.
            </p>
            <p>
              Электронная почта:{" "}
              <a href="mailto:deff2666@gmail.com?subject=Партнерство">
                Mamed@lmexpress.ru
              </a>
            </p>
            <p>
              PR-менеджер блога, Беназир Хакимова:{" "}
              <a href="mailto:benazirkhakimova91@gmail.com?subject=Хочу сотрудничать">
                benazirkhakimova91@melonfashion.ru
              </a>
            </p>
            <br />
            <h2>Юридический адрес:</h2>
            <p>
              190103, г. Бишкек, ул - Проспект-Мира, дом 20, здание Avangard{" "}
              литер А, пом. 2525#, 6 этаж.
            </p>
            <p> Тел. (996) 555-444-222, факс 600-03-54</p>
            <br />
            <br />
            <h2>Банковские реквизиты:</h2>
            <p>
              <b>АО "Мэлон Фэшн Груп"</b>
            </p>
            <p>Ф-Л "СЕВЕРНАЯ СТОЛИЦА" АО "KASPI" Г.Казахстан</p>
            <p> ИНН 7839326623</p>
            <p> КПП 783450001</p>
            <p>ОГРН 1057813298553</p>
            <p> ОКПО 79723322</p>
            <p> ОКВЭД 47.71 </p>
            <p> БИК 044030723 </p>
            <p> Кор. сч.: 30101810100000000723 </p>
            <p> Расч. сч. (руб.): 40702810403000421433 </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
