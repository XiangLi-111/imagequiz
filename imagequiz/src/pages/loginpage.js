import React from "react";
import Button from "@material-ui/core/Button";

import "./login.css";

const LogInPage = () => {
    return (
        <div className="App">

        <div className="nav">
        <Button variant="outlined" color="primary" href="./home">
        Back To Home
        </Button>
        
      </div>
      <div className='hint'>Here is the login page.</div>

    </div>
    )
};

export default LogInPage;