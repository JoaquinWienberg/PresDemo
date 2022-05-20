import Eolic from "../AnimatedImages/Eolic"
import * as React from 'react';
import Upstream from "../AnimatedImages/Oil";
import LinearProgress from '@mui/material/LinearProgress';
import "./LoadingScreen.css"

export default function LoadingScreen() {
    return(
        <div className="container">
            <div className="eolic-container"><Eolic /></div>
            <div className="loader-container">
                <h1>PMP Corp</h1>
                <h2>Resultados al 31/12/2022</h2>
                <LinearProgress sx={{width:"600px", margin:"auto", mt:2}}/>
            </div>
            <div className="upstream-container"><Upstream/></div>
            <div className="effectLines"></div>
            <div className="effectLines2"></div>
        </div>
    )
}