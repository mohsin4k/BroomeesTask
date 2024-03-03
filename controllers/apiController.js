import db from "../dataBase/dataBaseConnection.js";

const getAllEmployee = (req,res) => {
    const sql = "Select * from employee"; 
    db.query(sql, (err, result)=>{
        if(err){
            return res.json(err); 
        }
        return res.json(result); 
    })
}

const formSubmission=(req, res)=>{
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
}

export default {formSubmission, getAllEmployee}