import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { AudioEngineClone1, AudioEngineClone2, AudioEngineClone3, AudioEngineClone4, AudioEngineClone5, 
        AudioEngineClone6, AudioEngineClone7, AudioEngineClone8, AudioEngineClone9, AudioEngineClone10  } from "./imports";


export const AudioEngineClone = () => {
  const fourthProject = dataportfolio[3];

  // Carousel Styles
  const carouselStyles = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  };
  
  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "80vh",
  };
  
  /* May add captions to carousel images later 
  const captionStyles = {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px #000",
  };
  */
  const audioEnginestuff = {
    color: "#AA30FF",
  }
  const contentStyles = {
    textAlign: "center",
  };
  

  return (
    <HelmetProvider>
      <Container className="MPMovies-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> AudioEngine Clone | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> AudioEngine Clone </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={fourthProject.img} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone1} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone2} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone3} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone4} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone5} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone6} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone7} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone8} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone9} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={AudioEngineClone10} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
      </Carousel>
      <div style={contentStyles}>
        <p>{fourthProject.desctiption}</p>
        <p style={audioEnginestuff}>
        <strong>Please note:</strong> The content and images on this webpage are the <strong>exclusive intellectual property</strong> of Audioengine, and I have <strong>no affiliation</strong> with the company. Audioengine retains full ownership and copyright of all material on this webpage. This webpage has been created solely for <strong>educational purposes</strong> and may not be used for any other purposes. Please be advised that I am <strong>not employed or endorsed</strong> by Audioengine.
        </p>
      </div>
    </div>
        
        {/* MP Movies Header / Line section */}
        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Details </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* Tech Stack section */}
        <div className="content">
            <h2>Tech Stack</h2>
            <p>
                Audio Engine Clone was built using HTML, SCSS, JavaScript, and JQuery. Our team of four developers, including myself, Renz, Scott, and Brayden, worked on this project as a Final Project within the Front-End Web Developer 2 course in BCIT's Software Systems Developer program. We utilized slick sliders for the carousel feature, which added a dynamic element to the site's design and functionality.
            </p>
        </div>
        
        {/* Project Details section */}
        <div className="content">
            <h2>Project Details</h2>
            <p>
                <strong>Audio Engine Clone</strong> was a Final Project for the Front-end Web Development 2 course in BCIT's Software Systems Developer program. Our team of four developers, including myself, Renz, Scott, and Brayden, chose to undertake the most challenging option given to us, which was to clone the Audio Engine landing page. We were provided only with the imagery for the site and were tasked with creating a replica that was as close to the original as possible. The project was completed in just three days and was built to be fully responsive using the mobile-first method.
            </p>
            <p>
                To build the Audio Engine Clone, we utilized a variety of technologies, including HTML, SCSS, JavaScript, JQuery, and Slick Carousel. We were extremely detail-oriented in our approach to this project, ensuring that every aspect of the site was replicated as closely as possible to the original. Our hard work paid off, and we received an overall score of 98% for the project upon submission. The project was graded by our professor, Josh Solomon.
            </p>
            <h2>Project Significance</h2>
            <p>
                The <strong>Audio Engine Clone</strong> project was a significant challenge for our team, as we were tasked with creating a detailed replica of a complex landing page in a short period of time. This project provided us with valuable experience in working with a variety of web development technologies and helped us to develop our skills in attention to detail, problem-solving, and time management. The project was a testament to our team's ability to work collaboratively and efficiently under pressure, and we are proud of what we accomplished in just three days.
            </p>
            <h2>Future Opportunities</h2>
            <p>
                The <strong>Audio Engine Clone</strong> project was a valuable learning experience that has equipped us with new skills and knowledge that we can apply to future web development projects. We have honed our skills in working with HTML, SCSS, JavaScript, JQuery, and Slick Carousel, and have learned the importance of attention to detail, effective communication, and efficient time management. We are excited to take on new challenges and continue to develop our skills as web developers.
            </p>
        </div>

        {/* Design Choices section */}
        <Row className="my-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Design Choices</h1>
            <hr className="t_border my-4 ml-0" />
          </Col>
        </Row>
        {/* Design & Color Scheme section */}
        <div className="content">
          <h2 className="mb-4">Design and Color Scheme</h2>
          <p className="mb-5">For the Audio Engine Clone project, I aimed to replicate the design of the original Audio Engine landing page as closely as possible, while ensuring that the site was fully responsive and visually appealing. To achieve this, I used a combination of HTML, SCSS, JavaScript, JQuery, and the Slick Carousel library.</p>
          <div className="d-flex justify-content-center mb-5">
            <img src={AudioEngineClone1} alt="Placeholder Image 1" className="img-fluid rounded" />
          </div>
          <p className="mb-5">To ensure that the site looked as close to the original as possible, I paid close attention to details such as font sizes and weights, text alignment, and the placement and sizing of images. I also used a monochromatic color scheme with various shades of gray, black, and white, which helped to create a clean, modern look that was in line with the original design.</p>
          <div className="row mb-5">
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={AudioEngineClone2} alt="Placeholder Image 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={AudioEngineClone3} alt="Placeholder Image 3" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={AudioEngineClone9} alt="Placeholder Image 4" className="img-fluid rounded" />
            </div>
            <p>Overall, I am proud of the outcome of the design, as I believe it accurately replicates the original Audio Engine landing page while remaining visually appealing and user-friendly. The project allowed me to hone my skills in front-end web development and gain experience working with various libraries and technologies.</p>
          </div>

          {/* Wireframes section */}
          <div className="content">
            <h2 className="mb-4">Design Inspiration</h2>
            <p className="mb-5">Our design process was inspired by our professor's custom imagery created specifically for the Audio Engine Clone project. We used these images as reference when creating the website layout and functionality.</p>
            <p className="mb-5">Our aim was to create a modern, sleek design that is visually appealing and user-friendly. We incorporated a monochromatic color scheme with shades of black and gray to complement the audio-focused content of the site. In addition, we utilized different font sizes and weights for headings and body text to create a sense of visual hierarchy and structure.</p>
            <p className="mb-5">Overall, we are pleased with the outcome of the design, as it effectively captures the essence of a modern audio website while remaining easy to navigate and aesthetically pleasing.</p>
            <br></br>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

