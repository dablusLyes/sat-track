const axios = require('axios');
const express = require('express');

const router = express.Router();

let sat_data = {};
const API_KEY = '7VTRMM-8J5B8W-4NKEJF-4RW6';
const fetch_sat_data = async () => {
    let result;
    return axios({
        method: 'get',
        url: 'https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/20/&apiKey=' + API_KEY,
    }).then(res => res.data)
}

router.use('/', async (req,res,next) => {
    let data = await fetch_sat_data();
    console.log('data =>' , data);
    res.send({data})
})


module.exports = router;
