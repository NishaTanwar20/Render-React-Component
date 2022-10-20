import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
   <p>I am learning React. My life is getting better.</p>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
