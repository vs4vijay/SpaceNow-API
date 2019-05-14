import express from 'express';

const router = express.Router();

router.get('/users', function(req, res) {
    res.send('Hello Viz');
});

router.get('/data', (req, res) => {
    res.json({data: 'data'});
});

export default router;