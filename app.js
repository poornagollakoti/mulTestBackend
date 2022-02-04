const express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/api/mul', (req, res, next) => {
    let c = req.body.a * req.body.b;
    res.status(200).json(c)
});

app.listen(3000, ()=> {
     console.log(`Server running on port 3000`)
})