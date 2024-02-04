import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-wrapper">
        <div className="benefits-title">Преимущества доставки</div>
        <div className="benefits-subtitle">
          Делая заказ шашлыка с доставкой на дом или в офис, Вы получите
          следующие преимущества:
        </div>
        <div className="benefits-inner">
          <ul className="features">
            <li className="feature">
              
              Доставленный на дом шашлык ничем не будет отличаться от того,
              который подают в ресторане, ведь приготовлением занимаются только
              профессиональные повара, знающие и любящие своё дело.
            </li>
            <li className="feature">
              Готовим только из самого свежего и качественного мяса.
            </li>
            <li className="feature">
              Мы используем свежие, натуральные продукты, приготовленные по
              проверенным рецептам, чтобы Вы могли насладиться нашей кухней.
            </li>
            <li className="feature">
              Позаботившись заранее о предстоящем застолье и сделав
              предварительный заказ за несколько дней, можно указать точное
              время доставки и насладиться свежеприготовленным шашлыком.
            </li>
            <li className="feature">
              Экономия времени. Нет необходимости беспокоиться о закупке
              продуктов и оборудования для приготовления шашлыка. Заказ шашлыка
              с доставкой возможен в любое удобное для вас время.
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Benefits
