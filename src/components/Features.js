import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="section-image__small">
          <img src="./images/best-features.webp" alt="features" />
        </div>
        <div className="section-text">
          <div className="section-text__title">
           Como funciona isso?
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Número Compartilhado</div>
              <div className="section-text__body">
              Nós disponibilizamos aos nossos usuários um número para ele poder realizar suas ligações. Porém será um número compartilhado entre os usuários do app.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Benefícios</div>
              <div className="section-text__body">
              Realizar  ligações internacionais e nacionais com maior facilidade e não tem a necessidade de possuir um cartão SIM.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Como uso?</div>
              <div className="section-text__body">
              Basta ter o SuperTalk instalado e acesso a uma internet instável.
              </div>
            </div>

            {/* <div className="feature-box col-50">
              <div className="section-text__title-small">Segurança e Anonimato</div>
              <div className="section-text__body">
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </div>
            </div> //TODO ajudate posteriomente para uma mensagem adequada */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
