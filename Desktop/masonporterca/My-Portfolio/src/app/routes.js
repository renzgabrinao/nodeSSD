import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { MPMovies } from "../pages/portfolio/MPMovies";
import { BCITDaily } from "../pages/portfolio/BCITDaily";
import { AudioEngineClone } from "../pages/portfolio/AudioEngineClone";
import { FoodScape } from "../pages/portfolio/FoodScape";
import { Socialicons } from "../components/socialicons";
import { GPTChatApp } from "../pages/portfolio/GPTClone-Chat-App";
import { BankManagment } from "../pages/portfolio/BankManagment";
import { EcoMute } from "../pages/portfolio/EcoMute";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/mpmovies' element={<MPMovies />} />
        <Route path='/bcitdaily' element={<BCITDaily />} />
        <Route path='/audioengineclone' element={<AudioEngineClone />} />
        <Route path='/foodscape' element={<FoodScape />} />
        <Route path='/gptchatapp' element={<GPTChatApp />} />
        <Route path='/bankmanagment' element={<BankManagment />} />
        <Route path='/ecomute' element={<EcoMute />} />
        <Route path="*" element={<Home />} />
        
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
