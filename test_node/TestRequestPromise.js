const rp = require('request-promise');

async function get(url) {
    const options = {
      url,
      json: true
    };
    return rp.get(options);
  }

async function run(){
    try{
        const res = await get('https://localhost:1338/analytics/api/v1/modelgroup');
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

run();