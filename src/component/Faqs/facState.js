import { useState } from "react";
import classes from "./facState.module.css";

const FaqsState = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const css = {
    backgroundColor: isActive ? "#ADF7B6" : "transparent",
  };

  return (
    <div className={classes.accordion}>
      <div
        className={classes.accordion_title}
        onClick={() => setIsActive(!isActive)}
        style={css}
      >
        <div className={classes.title}>
          <h4>{title}</h4>
        </div>
      </div>
      {isActive && <div className={classes.content}>{content}</div>}
    </div>
    // <div className={classes.accordion}>
    //   <div className={classes.accordion_item}>
    //     <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    //       <div>{title}</div>
    //       <div>{isActive ? "-" : "+"}</div>
    //     </div>
    //     {isActive && <div className={classes.accordion_content}>{content}</div>}
    //   </div>
    // </div>
  );
};

export default FaqsState;
