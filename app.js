
import 'dotenv/config';
import express from 'express';

import routes from './src/routes';

const app = express();
const PORT = process.env.SERVER_PORT || 9000;

const logger = (req, res, next) => {
    console.log(`[LOG]`);
    next();
};

// app.use(logger);
app.use(express.json());

app.get('/', function(req, res) {
    res.send({success: true, message: 'Server is Running'});
});


// Add Routes
app.use('/api/v1', routes.users);



app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);
});