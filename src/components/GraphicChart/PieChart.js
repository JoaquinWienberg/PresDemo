import React from 'react'
import { Doughnut, scales } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto"



export default function PieChart({chartData}) {
    
    
    return (
        <div>
            <Doughnut data={chartData} options={{title: {display: true, title: "EBITDA"}}
                                            }/>
        </div>
    )
}
