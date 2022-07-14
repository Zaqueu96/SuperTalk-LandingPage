import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          Escolha o seu melhor plano de preços
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Assinatura Light</span>
              <div className="pricing-card__title">
                R$15<span> / mês</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Número compartilhado</li>
              <li>60 minutos</li>
              <li>15 minutos de bônus</li>
              <li>Ligações nacionais e internacionais</li>
              <li>Somente realizar chamadas</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Vamos lá
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Assinatura Private</span>
              <div className="pricing-card__title">
                R$45<span> / mês</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Número privado</li>
              <li>70 minutos</li>
              <li>25 minutos de bônus</li>
              <li>Ligações nacionais e internacionais</li>
              <li>Receber e realizar chamadas</li>
            </ul>
            <a
              href="#pricing"
              className="pricing-card__btn_disable"
              onClick={(evt) => evt.preventDefault()}
            >
              Em breve
            </a>
          </div>

          {/*       
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">4 years</span>
              <div className="pricing-card__title">
                $14<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Increase traffic 50%</li>
              <li>E-mail support</li>
              <li>10 Free Optimization</li>
              <li>24/7 support</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
