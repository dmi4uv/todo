import React from "react";
import ReactDOM from "react-dom";

const el = (<div>
    <h1>My todo List</h1>
    <input type="text" placeholder="search"/>
    <ul>
        <li>Learn react</li>
        <li>Build app</li>
    </ul>
</div>)


ReactDOM.render(el,document.getElementById("root"))