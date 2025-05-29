import React from 'react';
import './App.css';
import FundamentalRightsList from './components/FundamentalRightsList';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* Optionally remove the extra button for a cleaner app navbar at this stage */}
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          {/* Show the Fundamental Rights List as the primary main page */}
          <FundamentalRightsList />
        </div>
      </main>
    </div>
  );
}

export default App;