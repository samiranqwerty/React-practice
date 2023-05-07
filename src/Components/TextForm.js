import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert to uppercase", "success");
  }
  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Convert to lowercase", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  }

  const [text, setText] = useState('');
  return (
    <>
      <div style={{color: props.mode=== 'light'? '#222222':'#f0f0f0'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Textarea</label>
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark'? '#383838':'#f0f0f0', color: props.mode=== 'light'? '#222222':'#f0f0f0'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3" style={{color: props.mode=== 'light'? '#222222':'#f0f0f0'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minitues to read</p>
        <h2 className='y4'>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  )
}
