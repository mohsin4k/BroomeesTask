import express from 'express'; 
import cors from 'cors'; 
import mysql from 'mysql';
import reqValidation from './middleware/validation.js';

const app = express(); 
app.use(cors()); 
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "12345", 
    database: "crud"
})

app.get('/', (req, res)=>{
    const sql = "Select * from employee"; 
    db.query(sql, (err, result)=>{
        if(err){
            return res.json(err); 
        }
        return res.json(result); 
    })
})

app.post('/signup', reqValidation, (req, res)=>{
    const sql = "insert into employee(first_name, last_name, email, username, password) values (?)"; 
    const values = [
        `${req.body.first_name}`, 
        `${req.body.last_name}`,
        `${req.body.email}`, 
        `${req.body.username}`, 
        `${req.body.password}`
    ]
    db.query(sql, [values], (err, result)=>{
        if(err){
            console.log(err)
            return res.json(err); 
        }
        return res.json({message: "User Added successfully"}); 
    })

})

app.listen(8081, ()=>{
    console.log("Listening");
})
