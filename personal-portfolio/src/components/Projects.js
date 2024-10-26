import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/AI.webp";
import projImg2 from "../assets/img/sentiment.webp";
import projImg3 from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Skills.css";


export const Projects = () => {
  const projectCategories = [
    {
      eventKey: "first",
      title: "AI",
      projects: [
        {
          title: "Domain-specific Text Summarizer",
          description: "Developed an AI-powered chatbot using GPT-3.5 Turbo to summarize text documents and PDFs, specifically tailored for the healthcare and education sectors.",
          imgUrl: projImg1,
          fullDescription: "This project developed an AI-powered chatbot leveraging GPT-3.5 Turbo, tailored to summarize text documents and PDFs for the healthcare and education sectors, thus enhancing text relevance and precision. Unlike traditional summarizers, this model utilizes a Retrieval-Augmented Generation (RAG) architecture, enabling it to deliver highly domain-specific responses by dynamically retrieving external data. This sophisticated approach increases the accuracy of summaries, making them more relevant and precise. Optimized with advanced NLP techniques, the chatbot meets the complex needs of professionals, facilitating better decision-making and efficient information management.",
          
        }
      ]
    },
    {
      eventKey: "second",
      title: "ML & NLP",
      projects: [
        {
          title: "Enhanced Sentiment Analysis on Online Reviews Using Machine Learning",
          description: "Advanced sentiment analysis tool for deep consumer insights.",
          imgUrl: projImg2,
          fullDescription: "The 'Sentiment Analysis for Online Reviews' project utilized Python and Natural Language Processing (NLP) to create a sophisticated tool designed for analyzing sentiments in a dataset of 50,000 Amazon user reviews. Unlike traditional sentiment analyzers, this tool excels in handling poor text quality and effectively enhances the identification of key insights. It employs advanced NLP techniques and uses a combination of Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), and Long Short-Term Memory (LSTM) networks. The LSTM model, noted for its memory feature, is particularly adept at maintaining high classification accuracy, making it the preferred model for this challenging task.",
    
        }
      ]
    },
    {
      eventKey: "third",
      title: "Portfolio",
      projects: [
        {
          title: "Portfolio Website",
          description: "Personal portfolio to showcase projects.",
          imgUrl: projImg3,
          fullDescription: "This portfolio project is being developed using ReactJS for the front-end, Tailwind CSS for styling, and Django for the back-end. The focus is on creating an attractive and user-friendly UI that effectively showcases personal achievements, projects, and skills. ReactJS provides a dynamic and responsive interface, while Tailwind CSS ensures a modern and visually appealing design. Django is utilized for managing content and handling backend operations, including data storage and retrieval. The portfolio highlights a strong command of full-stack development and an ability to create polished, professional web applications.",
          
        }
      ]
    },
    
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projectCategories.map((category, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={category.eventKey}>{category.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" >
                      {projectCategories.map((category, index) => (
                        <Tab.Pane eventKey={category.eventKey} key={index}>
                          <Row className="">
                            <Col md={6} className="text-left">
                              <div className="project-details">
                                <h3 className='text-center'>{category.projects[0].title}</h3>
                                <p className="fullDescription">{category.projects[0].fullDescription}</p>
                              </div>
                            </Col>
                            <Col md={6}>
                              <a href={category.projects[0].url} target="_blank" rel="noopener noreferrer">
                              <img
                                src={category.projects[0].imgUrl}
                                alt={category.projects[0].title}
                                className="img-fluid"
                                style={{ width: '80%', height: 'auto',borderRadius: '10px'}} // Reduce image size by 20%
                              />
                              </a>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
