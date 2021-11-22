import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())


app.listen(port, () => console.log(`Server is running on port ${port}`))

app.get('/', (req,res) => {
    res.send(`server is running ok on port ${port}`)
})