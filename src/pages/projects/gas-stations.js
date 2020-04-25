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
          выходя из машины.
        </p>
      </LayoutColumn>
    </Layout>
  );
};
