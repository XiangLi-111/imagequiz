import React from "react";
import Button from "@material-ui/core/Button";

import "./login.css";

const LogInPage = (props) => {
    return (
        <div className="App">

        <div className="nav">
        <Button variant="outlined" color="primary" onClick = {() =>{
              props.history.push(`./home`);
            }}>
        Back To Home
        </Button>
        
      </div>
      <div className='hint'>Here is the login page.</div>

    </div>
    )
};

export default LogInPage;