// App.jsx
import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import RecordList from "./components/RecordList";
import Edit from "./components/Edit";
import CreateComponent from "./components/CreateComponent";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<CreateComponent />} />
            </Routes>
        </div>
    );
};
export default App;