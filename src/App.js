import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import FunctionalComp from './components/FunctionalComp';
// import ClassComp from './components/ClassComp';
// import Click from './components/Click';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import Formclass from './components/Formclass';

//Importing styles
import './appStyles.css';
import styles from './appStyles.module.css';

import './assets/style.css';
// import ReactDOM from 'react-dom';
//import QuizCom from './components/QuizCom';

// Createdone view
import MainRecipe from './components/recipeComponents/MainRecipe';

function App() {

  return (
    <div className="App">

     <MainRecipe/>

      {/* <h>Hello Tejaswi</h> */}
      {/* <QuizCom />  */}
      {/* <Formclass/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className= {styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Greet />
      <Welcome />

      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <Click></Click> */}
    </div>
  );
}

// ReactDOM.render(<App/>, document.getElementById("root"));

export default App;
