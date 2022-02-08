import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';

import Raiting from './components/Raiting/Raiting';

function App() {
  return (
    <div>
      <PageTitile title={'This is App component'} />

      <Accordion titleValue={"Menu"} />
      <Raiting value={0} />
      <Raiting value={2} />
      <Raiting value={3} />
    </div>
  );
}

function PageTitile(props: any) {
  return <h1>{props.title}</h1>
}
export default App;
