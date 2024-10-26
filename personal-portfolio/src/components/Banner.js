import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Anjan Meda`}</h1>
                <h2><strong>Full Stack Developer</strong></h2> {/* Static bold text */}
                <p>
  I am a skilled Software Engineer with experience in building high-performance web applications and API microservices. Proficient in Python, Java, C++, SQL, and modern web technologies like React.js and Spring Boot, I specialize in scalable systems and have worked with various cloud technologies to deliver optimized solutions that improve efficiency and data integrity.
                </p>
                <button onClick={() => window.open('https://www.linkedin.com/in/anjanmeda-uf/', '_blank')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
