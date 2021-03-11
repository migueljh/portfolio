import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import WorkExperience from "./WorkExperience/WorkExperience";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import Henryfy from "./Projects/Henryfy/Henryfy";
import Moba from "./Projects/Moba/Moba";
import WeatherApp from "./Projects/WeatherApp/WeatherApp";
import MoviesFinder from "./Projects/MoviesFinder/MoviesFinder";
import Footer from "./Footer/Footer";
import Loading from "./ScreenLoader";
import { AnimatePresence } from "framer-motion";

export const Context = React.createContext({
  screen: null,
  setScreen: () => {},
  colorMenu: null,
  setColorMenu: () => {},
  theme: null,
  setTheme: () => {},
  language: null,
  setLanguage: () => {},
  loading: null,
  setLoading: () => {},
});

function App() {
  const [screen, setScreen] = useState("");
  const [colorMenu, setColorMenu] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const [language, setLanguage] = useState(localStorage.getItem("language") || "es");
  const [loading, setLoading] = useState(true); 

  const handleLoading = () => {
		setLoading(false);
	}

  if (loading) {
    return <Loading handleLoading={handleLoading}/>;
  } 
    return (
      <AnimatePresence>
        <BrowserRouter>
          <Context.Provider
            value={{
              screen,
              setScreen,
              colorMenu,
              setColorMenu,
              theme,
              setTheme,
              language,
              setLanguage,
              loading,
              setLoading,
            }}
          >
            <Route path="/" component={Menu} />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/henryfy" component={Henryfy} />
            <Route exact path="/projects/moba" component={Moba} />
            <Route exact path="/projects/weather-app" component={WeatherApp} />
            <Route
              exact
              path="/projects/movies-finder"
              component={MoviesFinder}
            />
            <Route exact path="/resume" component={WorkExperience} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Footer} />
          </Context.Provider>
        </BrowserRouter>
      </AnimatePresence>
    );
  }


export default App;
