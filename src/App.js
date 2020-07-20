import React from 'react';
import Parent from './Parent'
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider>
    <div>
      
     <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
