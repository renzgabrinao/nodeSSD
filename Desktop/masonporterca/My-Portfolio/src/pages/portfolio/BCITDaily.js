import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {BCITDaily1, BCITDaily2, BCITDaily3, BCITDaily4, BCITDaily5, BCITDaily6, BCITDaily7, BCITDaily8, BCITDailyNewsBanner} from  "./imports.js";


export const BCITDaily = () => {
  const seventhProject = dataportfolio[6];

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
  
  const contentStyles = {
    textAlign: "center",
  };
  

  return (
    <HelmetProvider>
      <Container className="MPMovies-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> BCIT Daily | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> BCIT Daily News </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={seventhProject.img} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily1} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily2} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily3} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily4} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily5} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily6} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily7} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={BCITDaily8} alt="BCIT Daily News" style={imageStyles} />
        </Carousel.Item>
      </Carousel>
      <div style={contentStyles}>
        <p>{seventhProject.desctiption}</p>
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
            Our team of four developers, including myself, Renz, Scott, and Brayden, built the BCIT Daily News homepage using ReactJS. Despite the original plan of using only HTML, CSS, and JavaScript, we decided to take on the challenge of building the site in ReactJS, which was approved by our professors. This decision allowed us to gain valuable experience in ReactJS development, which is a highly sought-after skill in the industry.
          </p>
        </div>
        
        {/* Project Details section */}
        <div className="content">
          <h2>Project Details</h2>
          <p>
          <strong>BCIT Daily News</strong> is a modern and fully responsive news site homepage developed as a team project for the Front-End Web Development 2 course at BCIT. The project was originally planned to be created using only HTML, CSS, and JavaScript, but our team of four developers (including myself, Renz, Scoot, and Brayden) decided to take on the challenge of building the site in <strong>ReactJS</strong>, which was approved by our professors.

          Despite the time constraints, we worked collaboratively to come up with a clear vision of what we wanted our site to look like, and divided the workload equally among team members. We communicated effectively and helped each other out whenever necessary, simulating real-world industry scenarios.

          The <strong>BCIT Daily News</strong> homepage features a clean and modern design, with easy navigation and a seamless user experience. The project was completed within the given timeline, and our team is proud of what we have achieved.
          </p>
          <p>
            As part of the development, I implemented the functionality to sort movies by Now Playing Movies, Popular Movies, Top Rated Movies, and Upcoming Movies. Additionally, users can add movies to their favorite list using localStorage, enabling them to manage their favorite movies effectively.
          </p>
          <h2>Project Significance</h2>
          <p>
          The <strong>BCIT Daily News</strong> project was a valuable experience for all team members, allowing us to demonstrate our skills in <strong>ReactJS development</strong>, teamwork, communication, and problem-solving. We gained hands-on experience in creating a fully functional and visually appealing website from scratch, and learned the importance of working collaboratively and effectively managing our time.
          </p>
          <h2>Future Opportunities</h2>
          <p>
          The <strong>BCIT Daily News</strong> project has provided us with valuable knowledge and experience that we can apply to future projects. We have honed our skills in <strong>ReactJS development</strong>, which is a highly sought-after skill in the industry, and have gained a deeper understanding of the importance of effective communication and collaboration in achieving project success. We are excited to take on new challenges and continue to grow as developers.
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
          <p className="mb-5">For the MPMovies project, I aimed to create a modern design that is easy to navigate and visually appealing. To achieve this, I chose to use a monochromatic color scheme with various shades of blue and gray, as I believed these colors would work well with the movie-themed content of the site.</p>
          <div className="d-flex justify-content-center mb-5">
            <img src={BCITDailyNewsBanner} alt="Placeholder Image 1" className="img-fluid rounded" />
          </div>
          <p className="mb-5">To create a sense of visual hierarchy and structure, I utilized different font sizes and weights for headings and body text. Additionally, I incorporated plenty of white space throughout the design to allow content to stand out and create a sense of balance.</p>
          <div className="row mb-5">
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 3" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={BCITDailyNewsBanner} alt="Placeholder Image 4" className="img-fluid rounded" />
            </div>
            <p>Overall, I am satisfied with the outcome of the design, as I believe it effectively captures the essence of a modern movie website while remaining user-friendly and visually appealing.</p>
          </div>

          {/* Wireframes section */}
          <div className="content">
            <h2 className="mb-4">Wireframes</h2>
            <p className="mb-5">Before starting the actual design, I created wireframes to help me visualize the layout and functionality of the website. Here are some examples:</p>
            <div className="row mb-5">
              <div className="col-md-6">
                <img src={BCITDailyNewsBanner} alt="Main movie list wireframe" className="img-fluid rounded mb-4" />
                <p>Main movie list</p>
              </div>
              <div className="col-md-6">
                <img src={BCITDailyNewsBanner} alt="Favourites wireframe" className="img-fluid rounded mb-4" />
                <p>Favourites</p>
              </div>
              <div className="col-md-6">
                <img src={BCITDailyNewsBanner} alt="About page wireframe" className="img-fluid rounded mb-4" />
                <p>About page</p>
              </div>
              <div className="col-md-6">
                <img src={BCITDailyNewsBanner} alt="Movie popup wireframe" className="img-fluid rounded mb-4" />
                <p>Movie popup</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

