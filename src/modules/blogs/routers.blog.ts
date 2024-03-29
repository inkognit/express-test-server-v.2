import express from 'express';

const routers = express.Router();

routers.post('/', (req, res) => {
    req.body;
    return res.send(JSON.stringify({ res: req.body }));
});

routers.get('/', (req, res) => {
    const someStr = ' some string or data ';
    res.send(someStr);
});

routers.get('/:id', (req, res) => {
    const someStr = ' some string or data ';
    res.send(someStr);
});

routers.patch('/:id', (req, res) => {
    const someStr = ' some string or data ';
    res.send(someStr);
});

routers.delete('/:id', (req, res) => {
    const someStr = ' some string or data ';
    res.send(someStr);
});

module.exports = routers;
