import React from 'react';

function Root() {
  console.log('Is working');
  return (
    <div className="Root">
      <header className="Root-header">
        <p>
          Edit <code>src/Root.js</code> and save to reload.
        </p>
        <a
          className="Root-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Root;
