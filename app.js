import express from 'express';

const app = express();
const PORT = process.env.PORT || 9000;

const logger = (req, res, next) => {
    console.log(`[LOG]`);
    next();
};

app.use(logger);
app.use(express.json());

// app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Server is Running');
});

app.get('/viz', function(req, res) {
    res.send('Hello Viz');
});

app.get('/data', (req, res) => {
    res.json({data: 'data'});
});

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);
});