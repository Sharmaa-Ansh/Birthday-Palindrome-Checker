import "./styles.css";
import { useState } from "react";

export default function App() {
  const [verdict, setVerdict] = useState();

  const [date, setDate] = useState();

  function clickHandler() {
    if (date === undefined) {
      setVerdict("Enter a Date");
    } else {
      var dateArray2;
      var dateArray = date.split("-");
      dateArray2 = dateArray[2] + dateArray[1] + dateArray[0];
      console.log(dateArray2);
      var arlng = dateArray2.length;
      for (var i = 0; i < arlng / 2; i++) {
        if (dateArray2[i] === dateArray2[arlng - 1 - i]) {
          setVerdict("It is a palindrome");
        } else {
          setVerdict("It is not a palindrome");
        }
      }
    }
  }

  return (
    <div className="App">
      <h1>Check out if your Birthday is a palindrome</h1>
      <input
        className="entry"
        type="date"
        onChange={(e) => {
          setDate(e.target.value, 10);
        }}
      />
      <div>
        <button onClick={clickHandler}>CHECK</button>
      </div>
      <div className="verdict">{verdict}</div>
    </div>
  );
}
