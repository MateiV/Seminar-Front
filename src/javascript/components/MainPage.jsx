import React from 'react';

function MainPage(props) {
    const {title} = props;
    console.log(title);
    return ( 
    <div id="MainPage">
        <h1 className='mt-10 - text-blue-600'> Main Page</h1>
    </div>
    );
}

export default MainPage;