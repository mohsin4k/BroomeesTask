export default function reqValidation(req, res, next){

    if(`${req.body.confirmPassword}`!== `${req.body.password}`){
        return res.json({message: "password didn't match"}); 
    }else{
        next(); 
    }

}