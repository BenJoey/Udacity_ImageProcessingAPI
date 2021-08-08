import express from 'express';
import ImageResize from '../../ImageResize';
import path from 'path';

const images = express.Router();

images.get('/', async (req, res) => {
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);
  const filename = req.query.filename as unknown as string;
  const resizeOp = await ImageResize(width, height, filename);
  if (resizeOp.success) {
    res.sendFile(resizeOp.result, { root: path.join('./assets', 'thumb') });
  } else {
    res.send(resizeOp.result);
  }
});

export default images;
