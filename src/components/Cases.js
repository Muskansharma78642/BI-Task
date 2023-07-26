import React from 'react'
import { useState, useEffect } from 'react';
import Chart from 'react-google-charts'
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

const URL = "https://data.covid19india.org/v4/min/data.min.json";

const Cases = () => {
    const [ cases, setCases ] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const confirmedCases = [];

    const getCasesData = async () => {
        getCsvData()
        // let res = await fetch('../../public/assets/case_time_series.csv');
        // let data = await res.json();
        // console.log('data --->', data);
        // let setCaseData = [
        //     data.AN, data.AP, data.AR, data.AS, data.BR, data.CH, data.CT, data.DL, data.DN, data.GA, data.GJ, data.HP, data.HR, data.JH, data.JK, data.KA, data.KL, data.LA, data.LD, data.MH, data.ML, data.MN, data.MP, data.MZ, data.NL, data.OR, data.PB, data.PY, data.RJ, data.SK, data.TG, data.TN, data.TR, data.TT, data.UP, data.UT, data.WB
        // ]
        // //console.log(setCaseData);
        // setCases([...setCaseData])
        // console.log('CASES',cases);
        // extractConfirmedCases(cases)
        // setLoading(false)
    }

    useEffect(() => {
        getCsvData();
    }, [loading])

    const fetchCsv = async() => {
        return fetch('../../public/assets/case_time_series.csv').then( async function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    const getData = (result) => {
        setCases([result.data]);
        console.log('case --->',cases)
    }


    const getCsvData = async () => {
        let csvData = await fetchCsv();

        Papa.parse(csvData, {
            complete: getData
        });
    }



    // const extractConfirmedCases = ( data ) => {
    //     console.log('extractConfirmedCases')
    //     console.log(data)
    //     data.map( singleCase  => {
    //         console.log(singleCase);
    //         confirmedCases.push([singleCase.total.confirmed]);
    //     })
    //     console.log(confirmedCases);
    // }

    const caseChartOptions = {
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Popularity',
        },
        series: {
          1: { curveType: 'function' },
        },
      }

  return (
    <p>Cases</p>
    // <Chart
    //     width={'700px'}
    //     height={'410px'}
    //     chartType="LineChart"
    //     loader={<div>Loading Chart</div>}
    //     data={confirmedCases}
    //     rootProps={{ 'data-testid': '2' }}
    // />
  )
}

export default Cases
