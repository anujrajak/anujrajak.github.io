import { useState, useEffect } from "react";

import "./App.css";
import "./css/spectre.min.css";
import "./css/spectre-exp.min.css";
import "./css/spectre-icons.min.css";

import { NavBar } from './sections/NavBar';
import { Profile } from './sections/Profile';
import { Education } from './sections/Education';
import { Career } from './sections/Career';
import { Skills }  from './sections/Skills';
import { Achievements } from './sections/Achievements';


function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [isLoading]);

  return (
    <div>
      {isLoading && <div className="loading loading-lg centerStyle"></div>}
      {!isLoading && <>
        <NavBar />
        <Profile />
        <Career />
        <Education />
        <Skills />
        <Achievements />
      </>}
    </div>
  );
}

export default App;
