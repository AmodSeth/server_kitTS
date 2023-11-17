
import express from 'express';
import dotenv from 'dotenv';

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

    
app.get("/", (req, res) => {
        res.send("Hello World");

});




//server runnings
app.listen(process.env.PORT, () =>{
    console.log("Server is running on port ",process.env.PORT);
})
