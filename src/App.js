import React from 'react';
import './App.css';
import DailyUpdatesTable from './components/DailyUpdatesTable';
//import DailyUpdateForm from './components/DailyUpdateForm';

function App() {
  return (
    <div className="App">
      <h1>Daily Update DAta (Micro Frontend App)</h1>
      {/* <DailyUpdateForm /> */}
      <DailyUpdatesTable />
    </div>
  );
}

export default App;
