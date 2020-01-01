import React from 'react';
import { renderSourceInto } from '@ankabut/renderer';
import './app.css';

export const App = () => {
  const viewPortRef = React.useRef();
  const [code, setCode] = React.useState(`

  bebin azinja() {
    bede Mahfaze(
      Neveshte("Dorod jahan!", "background-color: red"),
      Mahfaze(
        Neveshte("Yek neveshte azmayeshi abi", "color: blue"),
        Neveshte("Yek neveshte dg ke sabze", "color: green"),
        "display:flex; flex-direction: row"
       ),
       Tasvir("https://www.adinehbook.com/images-1/images/products/9648935035._SS,400_.jpg"),
      "display:flex; flex-direction: column"
    );
  }
    
  `);

  function render(code: string) {
    renderSourceInto(code, viewPortRef.current);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <p>Ms. Ankabut</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          style={{ width: 500, minHeight: 500 }}
        ></textarea>
        <button
          onClick={() => render(code)}
          style={{ padding: 20, margin: 20 }}
        >
          Render
        </button>
        <div
          ref={viewPortRef}
          style={{ width: 500, height: 500, border: 'black 1px solid' }}
        ></div>
      </div>
    </div>
  );
};

export default App;
