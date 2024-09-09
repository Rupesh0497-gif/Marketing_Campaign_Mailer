import sendEmail from "../utils/emailUtils.js";

const mailFunction = (req, res) =>{
    sendEmail(req, res)
}
const mailController = {
    mailFunction: mailFunction
}
export default mailController;