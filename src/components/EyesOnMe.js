import React from 'react';

function makeBlur(e) {
    console.log( "Hey! Eyes on me!")
}

function makeFocus(e) {
    console.log("Good!")
}

function EyesOnMe(e) {
    return (
        
     <button onBlur={makeBlur} onFocus={makeFocus}>Eyes on me </button>
    )}

export default EyesOnMe