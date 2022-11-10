import React from 'react';
import ReactDOM from 'react-dom';


const page = (
    <div>
        <img src="./logo192.png" width = "40px" alt='BigCo Inc logo'/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created bty Jordan Walke</li>
            <li>Has over 100k stars on GitHub</li>
            <li>It's maintained by Facebook</li>
            <li>Powsers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)


ReactDOM.render(
    page,
    document.getElementById('root')
)