import express from 'express';
let router = express.Router();
import mailController from '../controllers/mailController.js';
router.get('/', (req, res)=>{
    return res.status(200).send({"API": "Is Alive"})
})
router.post('/sendBulkEmail', (req, res)=>{
    try{
       mailController.mailFunction(req, res)
    }catch(e){
        console.log("Here is the error in checkMailerFunction", e)
    }
})
export default router;