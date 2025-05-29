import React from 'react';
import './App.css';
import FundamentalRightsList from './components/FundamentalRightsList';
import RightDetail from './components/RightDetail';
import fundamentalRights from './fundamentalRightsData';

// PUBLIC_INTERFACE
/**
 * App (Main container)
 * Uses React state to manage navigation between:
 *   - the Fundamental Rights List (main page)
 *   - the RightDetail page (for selected right)
 */
function App() {
  // State: selectedRightIndex (null for list view, number for detail view)
  const [selectedRightIndex, setSelectedRightIndex] = React.useState(null);

  // Handler: select a right to view details (index)
  const handleSelectRight = (idx) => setSelectedRightIndex(idx);

  // Handler: go back to the main list
  const handleBackToList = () => setSelectedRightIndex(null);

  // View logic
  const isDetailView = selectedRightIndex !== null && selectedRightIndex >= 0 && selectedRightIndex < fundamentalRights.length;
  const selectedRight = isDetailView ? fundamentalRights[selectedRightIndex] : null;

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          {!isDetailView ? (
            <FundamentalRightsList onSelectRight={handleSelectRight} />
          ) : (
            <RightDetail right={selectedRight} onBack={handleBackToList} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;