import React from "react";
import Layout from "../../components/Layout";
import LayoutColumn from "../../components/LayoutColumn";

export default () => {
  return (
    <Layout>
      <LayoutColumn>
        <h1>Заправки в Навигаторе</h1>
        <p>
          Яндекс Навигатор помогает водителям водить. Приложение строит быстрые
          маршруты, показывает альтернативы и повороты. В 2018 команда решила
          добавить новый сервис в приложение — возможность заправиться, не
          выходя из машины. Мой коллега дизайнер делал первую версию. После двух
          месяцев команда была всё ещё не довольна тем, что получается. Но к
          тому времени уже началась разработка. До дедлайна оставался месяц. Мы
          решили поменяться местами, и проект отдали мне.
        </p>
      </LayoutColumn>
    </Layout>
  );
};
