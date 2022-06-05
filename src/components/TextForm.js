import React, { useState } from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState('Enter text here');



    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
    }


    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + Text); 
        let newText = Text.toLowerCase();
        setText(newText)
    }

    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        console.log("Onchange was clicked");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Please enter your text below .... </label>
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#87879f':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Lowercase</button>
                    <button className="btn btn-primary my-3 " onClick={handleCopy}>Copy</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                {/* <h1></h1> */}
                <p>{Text.split(" ").length - 1} words {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} minutes read</p>
                <h2 className='my-3'>Preview Text</h2>
                
                <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
