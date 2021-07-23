const express = require('express');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get('/api', (req,res) => {
    const start = "Front-end and backend connected";

    return res.json(start);
});

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));