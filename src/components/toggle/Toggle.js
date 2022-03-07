import React, { useContext } from "react";
import "./toggle.css";
import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';
import { ThemeContext } from "../../Context";

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className="toggle">
            <img src={Sun} alt="" className="toggle-img" />
            <img src={Moon} alt="" className="toggle-img" />
            <div className="toggle-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle; 