import React from 'react'
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const URL = "https://data.covid19india.org/v4/min/data.min.json";

const WorldMap = () => {
    const [displayData, setDisplayData] = useState([]);
    const [loading, setLoading] = useState([]);


    useEffect(() => {
        fetchURL();
    }, [loading])

    const fetchURL = async () => {
        let res = await fetch(URL);
        let data = await res.json();
        // console.log('URL --->', data)
        let setCaseData = [
            data.AN, data.AP, data.AR, data.AS, data.BR, data.CH, data.CT, data.DL, data.DN, data.GA, data.GJ, data.HP, data.HR, data.JH, data.JK, data.KA, data.KL, data.LA, data.LD, data.MH, data.ML, data.MN, data.MP, data.MZ, data.NL, data.OR, data.PB, data.PY, data.RJ, data.SK, data.TG, data.TN, data.TR, data.TT, data.UP, data.UT, data.WB
        ]
        let totalDeaths = setCaseData.reduce(function(prev, current) {
            return prev + +current.total.deceased
          }, 0);

        let totalRecovered = setCaseData.reduce(function(prev, current) {
            return prev + +current.total.recovered
          }, 0);
        
        let totalActive = totalRecovered - totalDeaths

        console.log('Death->', totalDeaths, ' Recovered ->', totalRecovered, ' Active ->', totalActive);

        setDisplayData([totalDeaths, totalRecovered, totalActive])
        console.log(displayData);

        setLoading(false);
    }

  return (
    <div className='worldMap'>
        <p><b>World Map</b></p>
        <div style={{ float: 'left' }}>
            <p style={{ marginBottom: '1px' }}><b>311,637 </b><span>USA</span> </p>
            <p style={{ marginBottom: '1px' }}><b>130,758 </b><span>Spain</span> </p>
            <p style={{ marginBottom: '1px' }}><b>142,632 </b><span>Italy</span> </p>
            <p style={{ marginBottom: '1px' }}><b>96,471 </b><span>Germany</span> </p>
            <p style={{ marginBottom: '1px' }}><b>89,953 </b><span>France</span> </p>
            <p style={{ marginBottom: '1px' }}><b>81,699 </b><span>China</span> </p>
            <p style={{ marginBottom: '1px' }}><b>58,226 </b><span>Iran</span> </p>
        </div>
        <div className='worldMapDoughnut' style={{ float: 'left' }}>
            <Doughnut 
                data={{
                    labels : ['Deaths', 'Recovered', 'Active'],
                    datasets : [{
                        data : displayData,
                        backgroundColor: ['red', 'green', 'blue']
                    }]
                }}
            />
        </div>
        <div style={{ float: 'left' }} className='worldMapIMG'>
                <img src={require('../assets/worldMap.png')}  alt='World Map Img' />
        </div>
    </div>
  )
}

export default WorldMap
