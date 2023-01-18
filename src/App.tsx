import React from 'react';
import carData from './data/dataStruct.json';
import BadgeList from './components/BadgeList';
function App() {
  return (
    <div>
      <div className='dashboard__title'>Vehicle Metrics:</div>
      <BadgeList badges={carData.content} />
    </div>
  );
}

export default App;
