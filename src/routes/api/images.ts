import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
  console.log(req.query.filename);
  res.sendFile(req.query.filename as string, { root: 'assets/' });
});

export default images;
