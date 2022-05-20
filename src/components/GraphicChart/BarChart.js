import React from 'react'
import { Bar, scales } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto"



export default function BarChart({chartData}) {
    
    
    return (
        <div>
            <Bar data={chartData} options={{scales: {yAxes: {display: false}},
                                            }}/>
        </div>
    )
}

