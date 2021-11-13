// import './app.css';
import React from 'react';
import Header from './components/Header';

type Props = {};

const App = (props: Props) => {
  return (
    <div className='app'>
      <Header />
      <h1>Let's build gmail</h1>
    </div>
  );
};

export default App;
