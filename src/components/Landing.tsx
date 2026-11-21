import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Olá! Eu sou</h2>
            <h1>
              Cauê
              <br />
              <span>Savallas</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Um desenvolvedor</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full</div>
              <div className="landing-h2-2">Stack</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Stack</div>
              <div className="landing-h2-info-1">Full</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
