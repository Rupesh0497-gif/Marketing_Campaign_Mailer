import nodeMailer from 'nodemailer'


/** Creating the transporter for SMTP */



const sendEmail= (req, res) =>{
    const transporter = nodeMailer.createTransport({
        service: 'Gmail',
        'auth': {
            user: req.body.emailFrom,
            pass: req.body.passCode
        }
    })
    
    const mailOptions = {
        from: req.body.emailFrom, // Sender address
        to: req.body.emailTo, // List of receivers
        cc: [], // CC receivers
        bcc: '', // BCC receivers
        subject: req.body.subject, // Subject line
        text: req.body.textContent, // Plain text body
        html: `<b>Hello ${req.body.emailTo.split('@')[0]} !!!</b>`, // HTML body
        replyTo: '', // Reply-to address
        attachments: [
            // Use a URL as an attachment
           // Use a file from the file system
        ],
        headers: {
          'X-Custom-Header': 'header value'
        },
        priority: 'high' // Email priority
      };
      
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send({"message": "Email has issue in completing the task!!!!!"})
        }else{
            res.status(200).send({"message": "Email sent successfully"})
        }
    })
}

export default sendEmail;