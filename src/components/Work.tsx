import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Seus projetos: troque os textos aqui
const projects = [
  {
    name: "Sistema de Gestão de Estoque",
    category: "Aplicação web",
    tools: "Python, Streamlit, MySQL, Git",
    image: "/images/sistema_de_stoque.jfif",
  },
  {
    name: "Fink Time",
    category: "Loja Web",
    tools: "HTML, CSS, JavaScript",
    image: "/images/loja_web.jfif",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(
        0,
        rect.width * box.length - (rectLeft + parentWidth) + padding
      );
    }

    setTranslateX();

    ScrollTrigger.addEventListener("refreshInit", setTranslateX);
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(translateX, 1)}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      ScrollTrigger.removeEventListener("refreshInit", setTranslateX);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Meus <span>Projetos</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Ferramentas e recursos</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;