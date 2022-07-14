import React from "react";

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle">App SuperTalk</div>
          <div className="section-text__title-big">App para ligações.</div>
          <div className="section-text__body">
            {/* //TODO definir esta mensagem com mais efeito */}
            Aplicativo para ligações nacionais e internacionais de forma simples
            e ágil.
          </div>
          <a href="#download" className="download-btn">
            Baixar App
          </a>
        </div>

        <div className="section-image">
          <img src="./images/hero_right.webp" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
