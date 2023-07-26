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
  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  

const URL = "https://data.covid19india.org/v4/min/data.min.json";

const Cases = () => {
    const [ cases, setCases ] = useState([]);
    const [ deathCases, setDeathCases ] = useState([]);
    const [ recoveredCases, setRecoveredCases ] = useState([]);
    const [ loading, setLoading ] = useState(true)

    const getCasesData = async () => {
        let res = await fetch(URL);
        let data = await res.json()
        let fetchedCases = [];
        let fetchedDeathCases = [];
        let fetchedRecoveredCases = [];
        let setCaseData = [
            data.AN, data.AP, data.AR, data.AS, data.BR, data.CH, data.CT, data.DL, data.DN, data.GA, data.GJ, data.HP, data.HR, data.JH, data.JK, data.KA, data.KL, data.LA, data.LD, data.MH, data.ML, data.MN, data.MP, data.MZ, data.NL, data.OR, data.PB, data.PY, data.RJ, data.SK, data.TG, data.TN, data.TR, data.TT, data.UP, data.UT, data.WB
        ]
        setCaseData.map(( singleCase ) => {
            fetchedCases.push(singleCase.total.recovered)
            fetchedDeathCases.push(singleCase.total.deceased);
            fetchedRecoveredCases.push(singleCase.total.recovered)
        })

        setCases([...fetchedCases])
        setDeathCases([...fetchedDeathCases])
        setRecoveredCases([...fetchedRecoveredCases])
        
        setLoading(false);
    }

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

      const deathData = {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
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
          plugins: {
            legend: {
              position: 'top',
            }
          }
        },
      };

      const recoveryData = {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
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
          plugins: {
            legend: {
              position: 'top',
            }
          }
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
