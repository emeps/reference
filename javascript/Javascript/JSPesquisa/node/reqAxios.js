const axios = require('axios');
axios.post('https://api.github.com/users/emeps',{
    todo:'Buy the milk'
})
.then((res) => {
    console.log(`StatusCode:${res.statusCode}`)
    console.log(res);
    
}).catch((err) => {
    console.error(err)
});
