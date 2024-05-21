import React from 'react';
import SignIn from './Components/SignIn/signIn';
import InfoSection from './Components/InfoSection/infoSetion';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SignIn />
      <InfoSection />
    </div>
  );
}

export default App;
