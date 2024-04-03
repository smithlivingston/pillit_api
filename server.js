const express       = require('express')
const cors          = require('cors');
const bodyParser    = require('body-parser')
const app           = express()

app.use(bodyParser.json());
app.use((req, res, next) => {   
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.listen(5050, () => {
    console.log("serve listening");
})

app.post('/pillit/api/savemed',( req, resp) => {
    debugger;
    const reqData = req.body;
    resp.json({status: 'sucess', message: 'data recieved'})
})

app.get('/pillit/api/getmed',( req, resp) => {
    debugger;
    const reqData = req.body
    resp.json('response success')
})

/*****EXPORTS */
module.exports = {app}
/***** X EXPORTS */