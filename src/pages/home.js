import "./home.css"
import Chart from "../components/Chart/Chart"
import PieChart from "../components/GraphicChart/PieChart";
import BarChart from "../components/GraphicChart/BarChart";
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { UserData, EbitdaSegment, EbitdaSegment1 } from "../components/Data/Data";
import Eolic from "../components/AnimatedImages/Eolic";
import Upstream from "../components/AnimatedImages/Oil";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Fade from 'react-reveal/Fade';
import SimpleAccordion from "../components/Accordion/Accordion";
import { display } from "@mui/system";
import { Link } from "react-router-dom"

export default function HomePage (){

    const [userData, setUserData] = useState ({
        labels: UserData.map((data) => data.year),
        datasets: [{label: "EBITDA",
                    data: UserData.map((data) => data.ebitda),
                    backgroundColor: ["#0077b6"]
                }, {
                    label: "Resultado neto",
                    data: UserData.map((data) => data.netres),
                    backgroundColor: ["#457b9d"]
                }]
    })

    const [userData2, setUserData2] = useState ({
        labels: EbitdaSegment1.map((data) => data.segment),
        datasets: [{label: "ebitda",
                    data: EbitdaSegment1.map((data) => data.ebitda),
                    backgroundColor: ["#0077b6","#00b4d8", "#90e0ef","#caf0f8"]
                }]
    })

    console.log(EbitdaSegment1[0].segments)

    return (
        <div className="homePage">
            <h1>Paper Business</h1>
            <h3>Periodo de 12 meses</h3>
            <Box sx={{p:2, marginLeft: "300px"}}>
                <Chart />
            </Box>
            <Fade right>
                <Box className="divContainer">
                    <Box>
                        <h3>EBITDA</h3>
                        <Box>
                            <p><CheckIcon style={{ color: '#3cb371' }} />Mayor volumen vendido segmento X </p>
                            <p><CheckIcon style={{ color: '#3cb371' }} />Mayores recuperos segmento Z </p>
                            <p><ClearIcon style={{ color: '#ff0000' }} />Mayores costos segmento X </p>
                        </Box>
                    </Box>
                    <BarChart chartData={userData}/>                    
                </Box>
            </Fade>
            <Fade left>
                <Box className="divContainer">
                    <PieChart chartData={userData2}/>
                    <Box sx={{textAlign: "center", width: "500px", display: "flex", flexDirection: "column", justifyContent:"space-around"}}>
                        <h2 className="h2-title">EBITDA por segmento</h2>
                        <Box sx={{display: "flex", margin: "auto", justifyContent: "space-around"}}>
                            <Eolic />
                            <Upstream />
                        </Box>
                    </Box>
                </Box>
            </Fade>
            <Fade right>
                <Box sx={{margin: "auto", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
                    <Box sx={{p: 4}}>
                        <h2 className="h2-title">Resumen de los segmentos</h2>
                        <p>Información adicional sobre cada segmento durante el periodo</p>
                    </Box>
                    <SimpleAccordion/>
                </Box>
            </Fade>
        </div>
    )
}