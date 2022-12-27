import express from "express";
import ORM from "./database/orm.js";
import cors from "cors";
import pool from "./database/database.js";

const app = express()

app.use(cors())

// Connect to the database
await pool.connect();


app.get('/users', async (req, res) => {
    try{
        let results = await ORM.read('users')
        res.send(results.recordset);
    }catch (err){
        console.log(err)
        res.status(500)
        res.send({'error': "Error Fetching database"})
    }
})

app.get('/users/create', async (req, res) => {
    try{
        let results = await ORM.create('users', {'name':req.query.name,'email':req.query.email})
        res.send(results.recordset);
    }catch (err){
        console.log(err)
        res.status(500)
        res.send({'error': "Error Fetching database"})
    }
})

app.use(express.static('public'));

app.listen(3001, () => {
    console.log('Express server listening on port 3001');
});