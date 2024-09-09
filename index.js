import express from 'express';
import bodyParser from 'body-parser'
import mailRouter from './routes/MailRouter.js'

const app = express();
const PORT = 3000

app.use(bodyParser.json());
app.use('/campaign', mailRouter)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));