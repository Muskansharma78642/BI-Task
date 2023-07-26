import React from 'react'
import { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";

// register chart.js elements before use
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

// fetch data from follwong URL
const URL = "https://data.covid19india.org/v4/min/data.min.json";

const Statistics = () => {
    const [loading, setLoading] = useState(true)
    const [deathData, setDeathData] = useState([]);
    const [recoverData, setRecoverData] = useState([]);

    //fetch data 
    const fetchURL = async () => {
        let res = await fetch(URL);
        let data = await res.json()

        //local scope placeholders
        let deathCases = [];
        let recoveredCases = [];  
        
        //Manipulate JSON
        let setCaseData = [
            data.AN, data.AP, data.AR, data.AS, data.BR, data.CH, data.CT, data.DL, data.DN, data.GA, data.GJ, data.HP, data.HR, data.JH, data.JK, data.KA, data.KL, data.LA, data.LD, data.MH, data.ML, data.MN, data.MP, data.MZ, data.NL, data.OR, data.PB, data.PY, data.RJ, data.SK, data.TG, data.TN, data.TR, data.TT, data.UP, data.UT, data.WB
        ]

        // extract data
        setCaseData.map(( singleCase ) => {
            deathCases.push(singleCase.total.deceased);
            recoveredCases.push(singleCase.total.recovered);
        })

        //update states
        setDeathData([...deathCases]);
        setRecoverData([...recoveredCases]);
        setLoading(false);
    }

    useEffect(() => {
        fetchURL()
    }, [loading])

    const option = {
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
        },
      };

      let labels=["01", "02", "03", "04", "05", "06"]

      
      const data = {
        labels,
        datasets: [
          {
            label: "Death",
            // data: [ 20, 30, 40, 50, 60,70],
            data: deathData,
            backgroundColor: "red",
          },
          {
            label:'Recover',
            // data:[15,20,25,40,45,60],
            data: recoverData,
            backgroundColor:'green'
          },
      
        ],
      
      };
      

  return (
    <div className='statistics'>
      <p style={{ padding: '15px' }}><b>Covid-19 Statistics</b></p>  
      <div className='statisticsBarGraph'>
        <Bar options={option} data={data} />
      </div>
    </div>
  )
}

export default Statistics
