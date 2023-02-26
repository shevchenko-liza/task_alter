import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from './styles.module.scss'

export const Profile = () => {
    const [showHome, setShowHome] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

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
            {showHome === true ?
                <>hshdhhs</> :
                null
            }
        </div>
    );
}

