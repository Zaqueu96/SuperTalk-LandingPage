import React from "react";

function Download() {
  return (
    <section id="download">
      <div className="container">
        <div className="section-text">
          <div className="section-text__title text-white">
            Nosso aplicativo disponível no momento para o android dispositivo
            Baixe agora
          </div>
          <div className="section-text__body text-white">
            No momento estamos disponibilizando o aplicativo para o android e em
            breve será disponibilizado para IOS.
          </div>
          {/* <a href="#download" className="download-btn__img">
            <img src="./images/app_btn1.webp" alt="app store" />
          </a> */}
          <a href="#download" className="download-btn__img">
            <img src="./images/app_btn2.webp" alt="google play store" />
          </a>
        </div>
        <div className="section-image">
          <img src="./images/available-app.webp" alt="download" />
        </div>
      </div>
    </section>
  );
}

export default Download;
