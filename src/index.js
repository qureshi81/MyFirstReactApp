import React from 'react';
import ReactDOM from 'react-dom';
import pic from '../src/images.png'

const page = (
    <div>
        <img src={pic}alt='BigCo Inc logo'/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>It's composbile</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintaind by skilled people</li>
        </ul>
    </div>
)


ReactDOM.render(
    page,
    document.getElementById('root')
)