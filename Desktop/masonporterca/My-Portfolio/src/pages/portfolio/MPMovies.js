import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {HomePage, About_MPMovies, Movie_Details, Top_Rated_Movies, Upcoming_movies, now_playing_movies,
        IphoneColorScheme, mainmovielistWire, favouritesWire, aboutWire, moviepopupWire} from  "./imports.js";


export const MPMovies = () => {
  const secondProject = dataportfolio[1];

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
          <title> MPMovies | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Main Header section */}
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
            <Col lg="8">
                <h1 className="display-4 mb-4"> MPMovies </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* MP Movies Carousel section */}
        <div style={carouselStyles}>
      <Carousel interval={2000} pauseOnHover={false}>
        <Carousel.Item>
          <img src={secondProject.img} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={HomePage} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={About_MPMovies} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Movie_Details} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Top_Rated_Movies} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Upcoming_movies} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={now_playing_movies} alt="MPMovies Project" style={imageStyles} />
        </Carousel.Item>
      </Carousel>
      <div style={contentStyles}>
        <p>{secondProject.desctiption}</p>
      </div>
    </div>
        
        {/* MP Movies Header / Line section */}
        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4"> Details </h1>{" "}
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        {/* Project Details section */}
        <div className="content">
          <h2>Project Details</h2>
          <p>
            The MPMovies project, which I recently completed, was developed using <strong>React JS</strong>, with a total development time of 12 hours. The project has been styled using <strong>CSS</strong> and integrates the <strong>TMDB API</strong> to fetch movie data. 
          </p>
          <p>
            As part of the development, I implemented the functionality to sort movies by Now Playing Movies, Popular Movies, Top Rated Movies, and Upcoming Movies. Additionally, users can add movies to their favorite list using localStorage, enabling them to manage their favorite movies effectively.
          </p>
          <h2>Project Significance</h2>
          <p>
            The MPMovies project was an essential part of my Software Systems Developer Program at BCIT, where it allowed me to showcase my proficiency in React JS and API integration. I am proud of what I have achieved with this project, and it has provided me with an opportunity to demonstrate my commitment to developing my skills in software development.
          </p>
          <h2>Future Opportunities</h2>
          <p>
            Overall, the MPMovies project has equipped me with hands-on experience in React JS development and API integration, which I can apply to future projects. I look forward to utilizing this knowledge to tackle new and exciting challenges in software development.
          </p>
          <a href='https://mbarry22.github.io/React-Movie-App/'>Live Project!</a>
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
            <img src={IphoneColorScheme} alt="Placeholder Image 1" className="img-fluid rounded" />
          </div>
          <p className="mb-5">To create a sense of visual hierarchy and structure, I utilized different font sizes and weights for headings and body text. Additionally, I incorporated plenty of white space throughout the design to allow content to stand out and create a sense of balance.</p>
          <div className="row mb-5">
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={About_MPMovies} alt="Placeholder Image 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={About_MPMovies} alt="Placeholder Image 3" className="img-fluid rounded" />
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <img src={About_MPMovies} alt="Placeholder Image 4" className="img-fluid rounded" />
            </div>
            <p>Overall, I am satisfied with the outcome of the design, as I believe it effectively captures the essence of a modern movie website while remaining user-friendly and visually appealing.</p>
          </div>

          {/* Wireframes section */}
          <div className="content">
            <h2 className="mb-4">Wireframes</h2>
            <p className="mb-5">Before starting the actual design, I created wireframes to help me visualize the layout and functionality of the website. Here are some examples:</p>
            <div className="row mb-5">
              <div className="col-md-6">
                <img src={mainmovielistWire} alt="Main movie list wireframe" className="img-fluid rounded mb-4" />
                <p>Main movie list</p>
              </div>
              <div className="col-md-6">
                <img src={favouritesWire} alt="Favourites wireframe" className="img-fluid rounded mb-4" />
                <p>Favourites</p>
              </div>
              <div className="col-md-6">
                <img src={aboutWire} alt="About page wireframe" className="img-fluid rounded mb-4" />
                <p>About page</p>
              </div>
              <div className="col-md-6">
                <img src={moviepopupWire} alt="Movie popup wireframe" className="img-fluid rounded mb-4" />
                <p>Movie popup</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

