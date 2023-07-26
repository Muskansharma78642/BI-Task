import React from 'react'
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register components of chartjs before using them
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
//URL to fetch data
const URL = "https://data.covid19india.org/v4/min/data.min.json";

const Cases = () => {
    const [ cases, setCases ] = useState([]);
    const [ deathCases, setDeathCases ] = useState([]);
    const [ recoveredCases, setRecoveredCases ] = useState([]);
    const [ loading, setLoading ] = useState(true)

    //fetch data
    const getCasesData = async () => {
        let res = await fetch(URL);
        let data = await res.json()

        //local scope placeholders
        let fetchedCases = [];
        let fetchedDeathCases = [];
        let fetchedRecoveredCases = [];

        //manipulate JSON
        let setCaseData = [
            data.AN, data.AP, data.AR, data.AS, data.BR, data.CH, data.CT, data.DL, data.DN, data.GA, data.GJ, data.HP, data.HR, data.JH, data.JK, data.KA, data.KL, data.LA, data.LD, data.MH, data.ML, data.MN, data.MP, data.MZ, data.NL, data.OR, data.PB, data.PY, data.RJ, data.SK, data.TG, data.TN, data.TR, data.TT, data.UP, data.UT, data.WB
        ]

        //extract data the way
        setCaseData.map(( singleCase ) => {
            fetchedCases.push(singleCase.total.recovered)
            fetchedDeathCases.push(singleCase.total.deceased);
            fetchedRecoveredCases.push(singleCase.total.recovered)
        })

        //update the state variable
        setCases([...fetchedCases])
        setDeathCases([...fetchedDeathCases])
        setRecoveredCases([...fetchedRecoveredCases])
        
        //update loading state
        setLoading(false);
    }

    //config for cases line chart
    const data = {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: cases
          }
        ]
      }
      
      const options = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
        },
      };

      //config for deaths line chart
      const deathData = {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1,
            data: deathCases
          }
        ]
      }
      
      const deathDataOptions = {
        type: 'line',
        data: deathData,
        options: {
          responsive: true,
        },
      };


      //config for recovered line chart
      const recoveryData = {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 1,
            data: recoveredCases
          }
        ]
      }
      
      const recoveryDataOptions = {
        type: 'line',
        data: recoveryData,
        options: {
          responsive: true,
        },
      };


    useEffect(() => {
        getCasesData();
    }, [loading])


  return (
    <div>
        <div className='casesChart' >
            <Line data={data} options={options} />
        </div>
        <div className='casesChart' >
            <Line data={deathData} options={deathDataOptions} />
        </div>
        <div className='casesChart' >
            <Line data={recoveryData} options={recoveryDataOptions} />
        </div>
    </div>
  )
}

export default Cases
