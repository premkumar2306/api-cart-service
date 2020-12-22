const axios = require('axios');

const get_access_token = async function() {
    const config = {
        method: 'post',
        url: 'https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.06c7739464c448a0013edec68d6128b8.17ae6a26c51fef216650d68cb278c04d&client_id=1000.SQ6IVJCRTBTKFE99L613ZS2K8U9KCG&client_secret=f36320b036583186380396f8ceefffe2f969ee8e6d&redirect_uri=https://terakart.in/books&grant_type=refresh_token',
        headers: { 
          'Cookie': 'e274bf66cd=551e802c66fb42dcaff4367f59fc904a; iamcsr=79fb3078-eda4-4da6-880d-b025695dabed; _zcsr_tmp=79fb3078-eda4-4da6-880d-b025695dabed'
        }
      };
      
      try {
        response = await axios(config);
        console.log(JSON.stringify(response.data));
      }
      catch {
        console.log(error);
      }
}
get_access_token();