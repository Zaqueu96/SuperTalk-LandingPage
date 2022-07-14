import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          Como podemos ajudá-lo com o SuperTalk!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="reader-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Facilidade</div>
              <div className="section-text__body">
                Permitimos ligações para exterior de forma facilitada, sem
                nenhuma burocracia.{" "}
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="wallet-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Bônus por demanda</div>
              <div className="section-text__body">
                Facilitamos a compra de pacotes de minutos, caso você use todos
                os minutos da assinatura mensal.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Uso Fácil</div>
              <div className="section-text__body">
                É necessário somente baixar o app e sair utilizando. 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
