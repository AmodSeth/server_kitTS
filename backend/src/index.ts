
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connect_to_database } from './db/connection';
import apiRouter from './routes';

//configurations
dotenv.config(
    {
        path: '.env'
    }
    );
const app = express();

//middlewars
/* it passes all the data from the json parser */
app.use(express.json());


app.use(morgan("dev"));



//api routes
app.use("/api/v1",apiRouter);

    
app.get("/", (req, res) => {
        res.send("Hello World");

});


const PORT = process.env.PORT || 5000;

//server runnings
connect_to_database().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}).catch((error)=>{
    console.log(error)
})

