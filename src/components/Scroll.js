import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflowY: 'scroll', borderTop: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll