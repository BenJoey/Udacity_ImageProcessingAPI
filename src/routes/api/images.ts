import express from 'express';
import Jimp from 'jimp';
import path from 'path';

const images = express.Router();

images.get('/', (req, res) => {
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);
  const filename = req.query.filename as unknown as string;
  Jimp.read(path.join('./assets', 'full', filename + '.jpg'))
    .then((image) => {
      const newFileName = `${filename}_${width}_${height}.${image.getExtension()}`;
      image
        .resize(width, height, Jimp.RESIZE_BEZIER)
        .write(path.join('./assets', 'thumb', newFileName), () => {
          res.sendFile(newFileName, { root: path.join('./assets', 'thumb') });
        });
    })
    .catch((err) => {
      res.send('Error during image creation: ' + err);
    });
});

export default images;
