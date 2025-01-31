import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const mongoUrl ="mongodb+srv://admin:123@cluster0.fnith.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl, {})

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("Database Connected");
})


app.use(bodyParser.json());

app.get("/",
    (req,res)=>{
        console.log(req)
        console.log("This is a get request");
    }
);

app.post("/",
    (req,res)=>{
        console.log("This is a get request");
    }
);

    

app.listen(
    5000,
    ()=>{
        console.log("Server is running on port 5000");
    }
)