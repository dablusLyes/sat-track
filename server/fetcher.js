const axios = require('axios');
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const API_KEY = '7VTRMM-8J5B8W-4NKEJF-4RW6';
let norad_list = [];

try {
    const data = fs.readFileSync(path.join(__dirname,'./','norad.txt'), 'utf8');
    norad_list = data.split(' ')
    console.log(norad_list);

} catch (err) {
    console.error(err)
}



const fetch_sat_data_from_api = async (NORAD) => {
    // TESTING 
    NORAD = NORAD ?? '25544';
    // TESTNIG
    return axios({
        method: 'get',
        url: `https://api.n2yo.com/rest/v1/satellite/positions/${NORAD}/41.702/-76.014/0/60/&apiKey= + ${API_KEY}`,
    }).then(res => res.data)
}


const multiple_sat_fetch = async (norad_list, sat_res) => {
    for (let i = 0; i < norad_list.length; i++) {
        const curr_norad = norad_list[i];
        let data = await fetch_sat_data_from_api(curr_norad);
        sat_res.push({[data.info.satname] : {...data}})
    }    
}

router.use('/', async (req, res, next) => {
    let satellite_result = [];
    await multiple_sat_fetch(norad_list,satellite_result);
    res.send({satellite_result})
})


module.exports = router;