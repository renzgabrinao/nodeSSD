import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {FoodScape1, FoodScape2, FoodScape3, FoodScape4, FoodScape5, FoodScape6, FoodScape7, FoodScape8, FoodScape9, FoodScape10, FoodScape11, FoodScape12,
FoodScape13, FoodScape14, FoodScape15, FoodScape16, FoodScapeWireFrame
} from  "./imports.js";


export const FoodScape = () => {
  const firstProject = dataportfolio[0];

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
          <title> FoodScape | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> FoodScape </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={firstProject.img} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape1} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape2} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape3} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape4} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape5} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape6} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape7} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape8} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape9} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape10} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape11} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape12} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape13} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape14} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape15} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={FoodScape16} alt="FoodScape" style={imageStyles} />
        </Carousel.Item>
      </Carousel>
      <div style={contentStyles}>
        <p>{firstProject.desctiption}</p>
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
            Our team of five developers, including myself (Mason), Renz, Scott, Kiriti, and Mario, built FoodScape using a combination of technologies. We used C# as our primary programming language and built the application on the .NET 7 framework. We incorporated the GoogleMaps API to enable location-based search functionality, and we used the MVC architecture to organize our code. Our database management system was MS SQL, and we integrated PayPal for payment processing. To handle client-side interactivity, we used JavaScript and JQuery, while HTML and CSS were used to structure and style the user interface. We utilized BootStrap for responsive design, and we implemented SendGrid for email notifications and ReCaptcha for security purposes.
          </p>
        </div>
        
        {/* Project Details section */}
        <div className="content">
  <h2>Project Details</h2>
  <p>
    <strong>FoodScape</strong> is a fully-functional and bespoke website developed by a team of five developers, including myself, as part of BCIT's Software Systems Development course. The project served as the main internal project for the course and was completed within a timeline of 13 days, which were spread out over the duration of the course.
  </p>
  <p>
    The project was divided into three distinct phases, starting with the initial idea phase. Our team decided on a food truck festival, which we named "FoodScape," as the idea for our project. We then proceeded to work on the project's foundational elements, including ERD's, wireframes, documentation, and more. We equally distributed the workload among team members, with each of us contributing to various parts of the project.
  </p>
  <p>
    Once the foundational elements were in place, we began the programming phase. We faced some challenges initially with the switch from .NET 6 to .NET 7, which resulted in some issues with our old migrations and context files. Nonetheless, we resolved these issues and proceeded with the project. We started by setting up SendGrid for email verification, MS SQL connection, and Identity Framework. Next, we focused on completing our database and deciding on how everything would work. Each team member chose 2-4 CRUD operations to build and implement, including tickets, ticket types, users, vendors, events, and more.
  </p>
  <p>
    One of the most significant aspects of FoodScape was its integration with PayPal. We linked PayPal to our ticketing system, which was based on MS SQL, allowing users to purchase tickets seamlessly. We also incorporated custom JavaScript functions and APIs to enhance the website's user experience further.
  </p>
  <p>
    Overall, FoodScape was a tremendous success. We created a fully responsive and bespoke website for a fictional company called "FoodScape," which was hosting a food truck festival from August 12th to August 14th, 2023. Users could purchase tickets, view events and vendors, and access various other features, including FAQ sections and user reviews. Additionally, we created full CRUD operations for admins and managers to create, edit, and delete most of the necessary information, such as users, vendors, and events.
  </p>
  <h2>Project Significance</h2>
  <p>
    The <strong>FoodScape</strong> project was a valuable experience for all team members, allowing us to demonstrate our skills in website development and problem-solving. We learned the importance of effective communication and collaboration, as well as time management. We gained hands-on experience in creating a fully-functional website from scratch, incorporating various technologies and features to enhance the user experience. Our experience with FoodScape has prepared us well for future projects, and we are excited to continue growing and developing our skills as developers.
  </p>
  <h2>Future Opportunities</h2>
  <p>
    The <strong>FoodScape</strong> project has provided us with valuable knowledge and experience that we can apply to future projects. We have honed our skills in website development, integrating with third-party payment systems, and working with databases. We have gained a deeper understanding of the importance of effective communication and collaboration in achieving project success. We are excited to take on new challenges and continue to grow as developers.
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
  <p className="mb-5">For the design of FoodScape, our team aimed to create a unique and modern look that would set it apart from other festival websites. After several discussions and mockups, we decided on a color scheme of navy blue and yellow. We felt that this combination provided a high contrast rate, making it easy for users to navigate the site and find what they were looking for. To keep the design modern, we decided to keep the background white, which allowed the colors to stand out.</p>
  <div className="d-flex justify-content-center mb-5">
    <img src={FoodScape1} alt="Screenshot of FoodScape homepage" className="img-fluid rounded" />
  </div>
  <p className="mb-5">To create a sense of unity throughout the site, we ensured that all of the imagery and logo design was consistent and aligned with the color scheme. Mason was the primary person responsible for creating the imagery using his expertise in Photoshop and design. We also utilized different font sizes and weights for headings and body text to create a sense of visual hierarchy and structure. We included plenty of white space throughout the design to allow content to stand out and create a sense of balance.</p>
  <div className="row mb-5">
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <img src={FoodScape2} alt="Screenshot of FoodScape vendors page" className="img-fluid rounded" />
    </div>
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <img src={FoodScape3} alt="Screenshot of FoodScape events page" className="img-fluid rounded" />
    </div>
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <img src={FoodScape4} alt="Screenshot of FoodScape FAQ page" className="img-fluid rounded" />
    </div>
  </div>
  <p>Overall, we are satisfied with the design of FoodScape as we believe it effectively captures the essence of a modern festival website while remaining user-friendly and visually appealing. However, we are always open to feedback and improvements to ensure that our users have the best experience possible.</p>
  <br />

  <Row className="my-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Video Walkthrough</h1>
            <hr className="t_border my-4 ml-0" />
          </Col>
        </Row>
        <div className="content">
  <iframe className="mb-5" width="100%" height="500px" 
    src="https://www.youtube.com/embed/B0jUoI_2dFQ" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  >
  </iframe>
</div>
  


          {/* Wireframes section 
          <div className="content">
            <h2 className="mb-4">Wireframes</h2>
            <p className="mb-5">Before starting the actual design, I created wireframes to help me visualize the layout and functionality of the website. Here are some examples:</p>
            <div className="row mb-5">
              <div className="col-md-6">
                <img src={FoodScapeWireFrame} alt="Main movie list wireframe" className="img-fluid rounded mb-4" />
                <p>Main movie list</p>
              </div>
              <div className="col-md-6">
                <img src={FoodScape1} alt="Favourites wireframe" className="img-fluid rounded mb-4" />
                <p>Favourites</p>
              </div>
              <div className="col-md-6">
                <img src={FoodScape1} alt="About page wireframe" className="img-fluid rounded mb-4" />
                <p>About page</p>
              </div>
              <div className="col-md-6">
                <img src={FoodScape1} alt="Movie popup wireframe" className="img-fluid rounded mb-4" />
                <p>Movie popup</p>
              </div>
            </div>
          </div>
  */}
        </div>
      </Container>
    </HelmetProvider>
  );
};

