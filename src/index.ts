import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
// import router from './router/router'
 
const app = express()

app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

// const server = http.createServer(app);


//methods 
app.post('pillit/api/saveMed', (req, res) => {
    const reqData = req.body;
    console.log(reqData);
})

app.listen(5454, ()=> {
    console.log('server running on http://localhost:5454/')
})



// const mongo_url = 'mongodb+srv://gsmithlivingston97:Bbuc7cUE0RZDrRaJ@cluster0.tvycsxy.mongodb.net/?retryWrites=true&w=majority'
// mongoose.Promise = Promise;
// mongoose.connect(mongo_url);
// mongoose.connection.on('error', (err) => console.log(err))

// app.use('/', router());