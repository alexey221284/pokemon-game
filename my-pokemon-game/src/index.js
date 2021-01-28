import React from 'react';
import ReactDOM from 'react-dom';

//const el = React.createElement(
 // 'h1',
  //null,
  //'Hello World, React.js!'
//);

const AppList = () => {
  return (
        <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          );
}

const AppHeader = () => {
  return <h1>This is my Header!</h1>
}

const App = () => {
  return (
    <>
    <AppHeader />
    <AppList />
    </>
  )
}




ReactDOM.render(<App />, document.getElementById('root'));