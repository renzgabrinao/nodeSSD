import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {FoodScape1, FoodScape2, FoodScape3, FoodScape4, FoodScape5, FoodScape6, FoodScape7, FoodScape8, FoodScape9, FoodScape10, FoodScape11, FoodScape12,
FoodScape13, FoodScape14, FoodScape15, FoodScape16, FoodScapeWireFrame
} from  "./imports.js";


export const BankManagment= () => {
  const eidthProject = dataportfolio[7];

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
      <Container className="BankManagment-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Bank Managment | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Bank Management App </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={eidthProject.img} alt="FoodScape" style={imageStyles} />
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
        <p>{eidthProject.desctiption}</p>
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
          As the sole developer of the "GPT Clone Chat App," I utilized a range of technologies to create a robust and efficient system. The application was built using AWS Serverless Application Model (SAM) with IAM authentication to ensure secure and seamless deployment. For the frontend, I chose to use React, a popular and powerful JavaScript library, to create a responsive and user-friendly interface. To store user data and chat logs, I implemented PostgreSQL and CockroachDB, which offer excellent performance and scalability.

Throughout development, I made sure to adhere to best practices and follow industry standards to create a high-quality product. I also utilized various tools and technologies to improve functionality and security. For example, I incorporated AWS CloudWatch to monitor and troubleshoot errors, and utilized SendGrid for email notifications. Additionally, I implemented ReCaptcha to ensure secure communication and protect against spam and other malicious activities.

Overall, the "GPT Clone Chat App" offers a seamless and secure chat experience for users, thanks to its powerful and reliable tech stack.
          </p>
        </div>
        
        {/* Project Details section */}

        <div className="content">
        <h2>Project Details</h2>
        <p>
            I was part of a team of developers who worked on a chat application called "GPT Clone Chat App" during the AWS Serverless module in the BCIT Software Systems Development program. Our professor wanted to show us how to work with SST, which makes the development process much easier by automating many tasks. We were given a design that mimicked ChatGPT, and our goal was to create a fully-functional chat application within a week's timeframe.
        </p>
        <p>
            We started by setting up Amplify for authentication, but later switched to IAM for better control over access to AWS resources. The chat application allowed users to create chat rooms and have conversations with others who joined the same room. We also implemented email verification for user signups, and enabled image uploads for users to share images within the chat rooms.
        </p>
        <p>
            We used CockroachDB to store all the chat and message data, which allowed us to keep track of unique IDs for each chat and message. Overall, we were able to create a fully-functional chat application with user authentication, chat room creation, messaging, image uploads, and data storage in just one week. 
        </p>
        <h2>Project Significance</h2>
        <p>
            The "GPT Clone Chat App" project was an excellent opportunity for me to improve my development skills, especially in working with AWS resources such as SST and IAM, and implementing features such as email verification and image uploads. I also learned how to work effectively in a team environment and manage time effectively to meet deadlines. The project gave me valuable hands-on experience in creating a fully-functional application within a short timeframe and allowed me to demonstrate my skills in software development.
        </p>
        <h2>Future Opportunities</h2>
        <p>
            The "GPT Clone Chat App" project has given me the knowledge and experience to take on future projects with confidence. I have honed my skills in AWS development and data storage, as well as working with team members to achieve project success. I am excited to take on new challenges and continue to grow as a software developer.
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
  <p className="mb-5">For the GPT Clone Chat App project, our professor gave us a design to follow that was inspired by the layout of Chat GPT, which was a popular and upcoming chat application at the time. We were tasked with creating a unique and modern look for our chat application, and we decided to stick with a simple and clean design. The color scheme we chose was a combination of blue and white, which gave the app a professional and sleek look. We also added a touch of green to some of the buttons to add some contrast and make them stand out. Overall, we aimed to create a design that was easy to navigate and pleasing to the eye. </p>
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


