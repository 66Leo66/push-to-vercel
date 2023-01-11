import fetch from 'node-fetch';

let url = process.argv[2]
let token = process.argv[3]

const options = { method: 'GET', headers: { Authorization: `Bearer ${token}` } };

fetch(`https://api.vercel.com/v13/deployments/${url}`, options)
    .then(response => response.json())
    .then(response => {

    })
    .catch(err => console.error(err));