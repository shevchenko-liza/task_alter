import React, { useEffect, useState } from "react";
import { Home } from "../Home-page";
import classes from './styles.module.scss'

export const Profile = () => {
    const [showHome, setShowHome] = useState(false)
    const localSignUp = localStorage.getItem("signUp")

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }

    })

    //   const history=useHistory()
    //   const handleGoHome = () => {
    //     history.push("/home"); // New line
    //   };

    return (
        <div className={classes.top} >
            {showHome  ?
                <>hshdhhs</> :
                <Home/>
            }
        </div>
    );
}

