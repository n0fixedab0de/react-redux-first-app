// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {faker} from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    return (
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
}

// 5. Show the component on the screen
root.render(<App/>);