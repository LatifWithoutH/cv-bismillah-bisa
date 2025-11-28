// src/App.jsx
import React from 'react';
import './App.css';
import Profile from './komponen/Profile';
import Skills from './komponen/Skill';
import Experiences from './komponen/Experience';
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