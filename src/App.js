import React from "react";
import InputBox from "./input.js";

//take the input and put it into the list item

function App() {
  const [listItem, setListItem] = React.useState([]);

  return (
    <div className="App">
      <InputBox input={listItem} setListItem={setListItem} />
    </div>
  );
}

export default App;
