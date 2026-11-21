import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Minha Carreira <span>&</span>
          <br /> experiencia
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                                <h4>Bacharelado em Ciência da Computação</h4>
                <h5>FB Uni Central</h5>
              </div>
              <h3>2029</h3>
            </div>
            <p>
              Cursando o 4º semestre, com base em lógica de programação,
              orientação a objetos e estrutura de dados. Conclusão prevista
              para 2029.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                                <h4>Desenvolvimento e Automação com Python</h4>
                <h5>Projetos práticos</h5>
              </div>
              <h1>PROJETOS</h1>
            </div>
            <p>
              Criei um sistema de gestão de estoque com Streamlit e MySQL, com
              CRUD completo, que reduziu em 20% o tempo de cadastro. Também
              desenvolvo scripts de automação e integração com APIs REST.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                                <h4>Estudos em Desenvolvimento de Software</h4>
                <h5>Rocketseat</h5>
              </div>
              <h1>AGORA</h1>
            </div>
            <p>
              Continuo evoluindo em programação e desenvolvimento web na
              Rocketseat, e busco um estágio pra aplicar o que aprendo em
              projetos reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
