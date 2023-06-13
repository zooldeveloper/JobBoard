const http = require('http');
const express = require('express');
const cors = require('cors');
// require('dotenv').config({});

const data = require('./jobs.json');
const app = express();
app.use(cors());

app.get('/jobs', (req, res, next) => {
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ error })
    }
});

app.get('/jobs/:id', (req, res, next) => {
    const job = data.find(job => job.id == req.params.id);
    
    try {
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error });
    }
});

const server = http.createServer(app);

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Server is listening on port ${port}`));