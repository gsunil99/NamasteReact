import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Heading1 = () => {
  return <h1>Hello World</h1>;
};
const Heading2 = () => {
  return <h1>Hello React</h1>;
};

const heading = <h1>Hello World</h1>;

const Logo = () => {
  return (
    <div>
      <img
        className="logo"
        src="https://ca.slack-edge.com/T02HYPKMV1B-U044UHWA2TU-d09e12aba28b-72"
        alt="logo"
      />
      <></>
    </div>
  );
};

const Searchbar = () => {
  return <input className="search" type="text" placeholder="Search" />;
};

const App = () => {
  return (
    <div className="header">
      <Logo />
      <Searchbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
