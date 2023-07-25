import React from 'react'
import { useState, useEffect } from 'react';
import Chart from 'react-google-charts'
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse'

const URL = "https://data.covid19india.org/v4/min/data.min.json";

const Cases = () => {
    const [rows, setRows] = useState([])
    
    useEffect(() => {
      async function getData() {
        const response = await fetch('../../public/assets/case_time_series.csv')
        const reader = response.body.getReader()
        const result = await reader.read() // raw array
        console.log('raw array', result);
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const rows = results.data // array of objects
        console.log('rows --->', rows );
        setRows(rows)
      }
      getData()
    }, []) // [] means just do this once, after initial render
    return (
      <div className="app">
        <Chart
            rows={rows}
            chartType='Line'
        />
      </div>
    )
  
}

export default Cases
