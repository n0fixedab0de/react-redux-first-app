// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from "@faker-js/faker";

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    return (
      <div className="ui container comments">
          <div className="comment">
              <a href="/" className="avatar">
                  <img alt="avatar" />
              </a>
              <div className="content">
                  <a href="/" className="author">
                      Sam
                  </a>
                  <div className="metadata">
                      <span className="date">Today at 6:00PM</span>
                  </div>
                  <div className="text">Nice blog post!</div>
              </div>
          </div>
      </div>
    );
}

// 5. Show the component on the screen
root.render(<App />);