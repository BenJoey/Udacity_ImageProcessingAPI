import express from 'express';
import images from './routes/api/images';
import requestValidator from './middlewares/requestValidator';

const app = express();
const port = 3000;

app.use('/api/images', requestValidator, images);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
