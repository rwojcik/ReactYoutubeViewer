import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwckF2cjlvHBZbFc2t0bjDqcHhCgs2qm4';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
