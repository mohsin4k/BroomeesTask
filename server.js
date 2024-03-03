import express from 'express'; 
import cors from 'cors'; 
import reqValidation from './middleware/validation.js';
import GetAllEmployee from './controllers/apiController.js';

const app = express(); 
app.use(cors()); 
app.use(express.json());

app.listen(8081, ()=>{
    console.log("Listening");
})


//This is the API to get all the employee added 
app.get('/', GetAllEmployee.getAllEmployee);

//This is the API to insert the form data in the database 
app.post('/signup', reqValidation, GetAllEmployee.formSubmission)
