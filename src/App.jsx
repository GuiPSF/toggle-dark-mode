import { useState, useRef } from "react";
import "./App.css";
import Switch from "@mui/joy/Switch";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [checked, setChecked] = useState(false);
  const ref = useRef();
  const buttonRef = useRef();
  const textRef = useRef();
  const switchRef = useRef();

  const handleClick = () => {
    theme
      ? ((ref.current.style.backgroundColor = "rgb(32, 31, 31)"),
        (buttonRef.current.style.backgroundColor = "gray"),
        (buttonRef.current.style.color = "white"),
        (textRef.current.style.backgroundColor = "gray"),
        (textRef.current.style.color = "white"),
        (switchRef.current.style.color = "white"))
      : ((ref.current.style.backgroundColor = "rgb(245, 245, 245)"),
        (buttonRef.current.style.backgroundColor = "rgb(194, 194, 194)"),
        (buttonRef.current.style.color = "black"),
        (textRef.current.style.backgroundColor = "rgb(194, 194, 194)"),
        (textRef.current.style.color = "black"),
        (switchRef.current.style.color = "black"));
    setTheme(!theme);
  };

  return (
    <>
      <div id="content" ref={ref}>
        <div className="texts" ref={textRef}>
          <h3>
            This is an example of a Web Application for the function "Toggle
            Dark Mode" testing. This is a very usefull feature for any app. In
            this Website, when the switch is clicked, all the site content
            change its color, including the fonts.
          </h3>
        </div>
        <button ref={buttonRef}>Dark Mode</button>
        <Switch
          className="switch"
          ref={switchRef}
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
          endDecorator={checked ? "On" : "Off"}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default App;
