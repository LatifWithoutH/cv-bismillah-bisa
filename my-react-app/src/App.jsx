// src/App.jsx
import React from 'react';
import './App.css';
import Profile from './komponen/profile';
import Skills from './komponen/skill';
import Experiences from './komponen/experience';
import data from '../dataMahasiswa.json'; // path ke file di root project

function App() {
  return (
    <div className="app-container">
      <Profile data={data.profile} />
      <Skills data={data.skills} />
      <Experiences data={data.experiences} />
    </div>
  );
}

export default App;