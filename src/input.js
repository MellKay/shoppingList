import React from "react";

//create an input box and button
//the function takes the input from the box and puts that into the list item
//on click the button should get the value of the input field and put that into the list item

function InputBox({ input, setListItem }) {
  const [fieldInput, setInput] = React.useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick() {
    setListItem(input);
  }
  return (
    <div>
      <input onBlur={handleChange} placeholder="Add an item..."></input>
      <button onClick={handleClick}>Add to list</button>
      <ul>
        <li>{fieldInput}</li>
      </ul>
    </div>
  );
}

export default InputBox;
