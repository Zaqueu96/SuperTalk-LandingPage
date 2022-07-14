import React from "react";

function Screenshots() {
  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">Conhecendo melhor nosso App. </div>
          <div className="section-text__body">
            Para propiciar a você usuário estamos investindo em usabilidade e simplicidade.
          </div>
        </div>
        <div className="section-carousel">
          <div className="section-carousel__images">
            <div className="section-carousel__image">
              <img src="./images/App1.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App2.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App3.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App1.webp" alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
