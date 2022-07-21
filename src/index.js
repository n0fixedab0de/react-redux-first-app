// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {faker} from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning!</h3>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 4:45PM" comment={faker.lorem.lines(1)} avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 5:15PM" comment={faker.lorem.lines(1)} avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} timeAgo="Today at 6:00PM" comment={faker.lorem.lines(1)} avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

// 5. Show the component on the screen
root.render(<App/>);