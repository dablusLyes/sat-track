const axios = require('axios');
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const NUMBER_OF_POSITIONS = '2';
const API_KEY = '7VTRMM-8J5B8W-4NKEJF-4RW6';
let norad_list = [];

try {
    const data = fs.readFileSync(path.join(__dirname,'./','norad.txt'), 'utf8');
    norad_list = data.split(' ');

} catch (err) {
    console.error(err)
}
norad_list = ['25544','36516'];



const fetch_sat_data_from_api = async (NORAD) => {
    // TESTING 
    NORAD = NORAD ?? '25544';
    // TESTNIG
    return axios({
        method: 'get',
        url: `https://api.n2yo.com/rest/v1/satellite/positions/${NORAD}/41.702/-76.014/0/${NUMBER_OF_POSITIONS}/&apiKey= + ${API_KEY}`,
    }).then(res => res.data)
}


const multiple_sat_fetch = async (norad_list) => {
    let sat_res = [];
    for (let i = 0; i < norad_list.length; i++) {
        const curr_norad = norad_list[i];
        let data = await fetch_sat_data_from_api(curr_norad);
        sat_res.push( {...data})
    }
    return sat_res;
}

const sat_result_destructuring = async (data,pos_nr) => {

    let result = [];
    let sat_nr = data.length;
    for (let j = 0; j < pos_nr; j++) {
        let val = [];
        for (let i = 0; i < sat_nr; i++) {
            val.push({
                [data[i].info.satname]: {
                    lon: data[i].positions[j].satlongitude,
                    lat: data[i].positions[j].satlatitude,
                    time:data[i].positions[j].timestamp
                }
            })
            result.push({ [data[i].positions[j].timestamp]: val })
        }
    }
    
    return result;
}
router.use('/', async (req, res, next) => {
    let data = await multiple_sat_fetch(norad_list)
    let dz   = await sat_result_destructuring(data,NUMBER_OF_POSITIONS)
    res.send(dz)
})


module.exports = router;