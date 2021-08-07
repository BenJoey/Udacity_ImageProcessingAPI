import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
    console.log(req.query.filename);
    res.send(req.query.filename);
});

export default images;