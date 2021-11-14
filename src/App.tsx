// import './app.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

type Props = {};

const App = (props: Props) => {
  return (
    <div className='app'>
      <Header />

      <Sidebar />
      <h1>Let's build gmail</h1>
    </div>
  );
};

export default App;
