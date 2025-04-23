import cl from "./Style.module.css";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiSocketdotio } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiWebpack } from "react-icons/si";

import pdf from "./assets/Xoлин Владислав (8) (1).pdf";
import me from "./assets/Me.png";

const App = () => {
  return (
    <div className={cl.wrap}>
      <header className={cl.header}>
        <nav className={cl.navbar}>
          <IoLogoReact style={{ width: "40px", height: "40px" }} />
          <ul className={cl.list}>
            <li className={cl.list_item}>
              <a href="https://t.me/vladjobb" target="_blank">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={cl.main}>
        <section className={cl.about_me}>
          <div className={cl.img_wrap}>
            <img src={me} alt="about me" />
            <div className={cl.img_desc}>
              <h1 className={cl.title}>
                Привет! Меня зовут Влад и я предлагаю посмотреть моё
                <a className={cl.cv_link} href={pdf} download="резюме">
                  резюме
                </a>
              </h1>
            </div>
          </div>
        </section>

        <section className={cl.desription}>
          <div className={cl.about_desc}>
            <h2 className={cl.title_2}>Я Frontend разработчик.|</h2>
            <p className={cl.sub_title}>
              А точнее, frontend разработчик на React
            </p>
          </div>
          <p className={cl.who_i}>
            На данный момент у меня 4.8 года опыта в создании высококачественных
            веб-приложений на React, обладаюю навыками оптимизации
            производительности, тестирования и работы в Agile-командах.
          </p>
        </section>

        <section className={cl.expirience_wrap}>
          <h2 className={cl.expirience_title}>Опыт в направлениях:</h2>
          <ul className={cl.expirience_list}>
            <li className={cl.expirience_item}>
              Финтех
              <p className={cl.expirience_text}>
                Разрабатывал Проект Росэлторог - онлайн-агрегатор для участников
                государственных и коммерческих закупок у банков-партнеров.{" "}
              </p>
            </li>
            <li className={cl.expirience_item}>
              Медтех
              <p className={cl.expirience_text}>
                Разрабатывал проект Онлайн Доктор - сервис по подбору врачей и
                их взаимодействия с пациентами.
              </p>
            </li>
            <li className={cl.expirience_item}>
              Екомерс
              <p className={cl.expirience_text}>
                Разрабатывал платформу для продажи билетов на спортивные
                мероприятия.
              </p>
            </li>
            <li className={cl.expirience_item}>
              Образование
              <p className={cl.expirience_text}>
                Разрабатывал - образовательную платформу для частной школы
              </p>
            </li>
          </ul>
        </section>

        <section className={cl.tech_wrap}>
          <p className={cl.tech_desc}>Технологии и проекты:</p>
          <ul className={cl.icon_list}>
            <li className={cl.icon}>
              <IoLogoReact />
            </li>
            <li className={cl.icon}>
              <TbBrandTypescript />
            </li>
            <li className={cl.icon}>
              <BsFiletypeScss />
            </li>
            <li className={cl.icon}>
              <IoLogoCss3 />
            </li>
            <li className={cl.icon}>
              <IoLogoNodejs />
            </li>
            <li className={cl.icon}>
              <FaHtml5 />
            </li>
            <li className={cl.icon}>
              <FaGitSquare />
            </li>
            <li className={cl.icon}>
              <FaGitlab />
            </li>
            <li className={cl.icon}>
              <GrGraphQl />
            </li>
            <li className={cl.icon}>
              <SiSocketdotio />
            </li>
            <li className={cl.icon}>
              <SiNpm />
            </li>
            <li className={cl.icon}>
              <SiVite />
            </li>
            <li className={cl.icon}>
              <SiWebpack />
            </li>
          </ul>
        </section>

        <section className={cl.project_wrap}>
          <div className={cl.container}>
            <div className={cl.task}>
              <div className={cl.decor}></div>

              <div className={cl.tasks}>
                <p className={cl.task_title}>Онлайн Доктор</p>
                <p className={cl.task_desk}>
                  Это сервис по подбору врачей и их взаимодействию с пациентами
                </p>
                <span className={cl.t}>Задачи и достижения:</span>
                <ul>
                  <li>
                    - Написал внутренний чат что улучшило взаимодействие между
                    врачами и пациентами.
                  </li>
                  <li>
                    - Реализовал фасетные фильтры с большим количеством
                    фильтруемых типов.
                  </li>
                  <li>- Интегрировал виджет платежной системы.</li>
                  <li>
                    - Реализовал функционал уведомлений и кастомизировал их под
                    наш UI kit
                  </li>
                </ul>
              </div>
            </div>

            <div className={cl.task}>
              <div className={cl.tasks}>
                <p className={cl.task_title}>UR Generator</p>
                <p className={cl.task_desk}>
                  Это сервис для генерации договоров на базе шаблонов.
                </p>
                <span className={cl.t}>Задачи и достижения:</span>
                <ul>
                  <li>
                    - С нуля разработал UI kit для проекта с документацией в
                    story book.
                  </li>
                  <li>
                    - Сделал систему для динамического создания шаблонов
                    договоров.
                  </li>
                  <li>
                    - Написал интерактивного помощника по заполнению договоров.
                  </li>
                  <li>
                    - Реализовал удобную систему сравнения версий договоров.
                  </li>
                  <li>- Покрыл тестами значительную часть кода.</li>
                </ul>
              </div>
            </div>

            <div className={cl.task}>
              <div className={cl.tasks}>
                <p className={cl.task_title}>Математический лицей</p>
                <p className={cl.task_desk}>
                  Это - образовательная платформа для частной школы.
                </p>
                <span className={cl.t}>Задачи и достижения:</span>
                <ul>
                  <li>- Написал конструктор для создания курсов</li>
                  <li>- Оптимизировал компонент на странице поиска курсов</li>
                  <li>
                    - Реализовал систему достижений для учеников за активности
                  </li>
                  <li>
                    - Реализовал рестрикшен ui в зависимости от роли
                    пользователя.
                  </li>
                  <li>- Создал систему оценок и отзывов для преподавателей.</li>
                </ul>
              </div>

              <div className={cl.tasks}>
                <p className={cl.task_title}>Росэлторог</p>
                <p className={cl.task_desk}>
                  Это - онлайн-агрегатор для участников государственных и
                  коммерческих закупок у банков-партнеров.
                </p>
                <span className={cl.t}>Задачи и достижения:</span>
                <ul>
                  <li>- Написал конструктор для создания курсов</li>
                  <li>- Оптимизировал компонент на странице поиска курсов</li>
                  <li>
                    - Реализовал систему достижений для учеников за активности
                  </li>
                  <li>
                    - Реализовал рестрикшен ui в зависимости от роли
                    пользователя.
                  </li>
                  <li>- Создал систему оценок и отзывов для преподавателей.</li>
                </ul>
              </div>

              <div className={cl.tasks}>
                <p className={cl.task_title}>ETicket</p>
                <p className={cl.task_desk}>
                  Это - платформа для продажи билетов на спортивные мероприятия
                </p>
                <span className={cl.t}>Задачи и достижения:</span>
                <ul>
                  <li>
                    - Разрабатывал админ панель для удобной работы с данными
                  </li>
                  <li>
                    - Занимался настройкой роутинга для корректной навигации по
                    страницам.
                  </li>
                  <li>
                    - Занимался рефакторингом компонентов с классовых на
                    функциональные для улучшения производительности.
                  </li>
                  <li>
                    - Реализовал рестрикшен UI компонентов в зависимости от роли
                    пользователя.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={cl.contacts}>
          <p>
            Спасибо за уделенное время, связаться со мной можно в телеграмм{" "}
            <a
              className={cl.contact_link}
              href="https://t.me/vladjobb"
              target="_blank"
            >
              @vladjobb
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
