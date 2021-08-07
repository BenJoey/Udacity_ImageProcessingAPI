import express from 'express';

const requestValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('InValidator');
  let errMsg: String = '';
  if (req.query.filename == undefined) errMsg += 'Missing filename; ';
  if (req.query.width == undefined) errMsg += 'Missing image width; ';
  if (req.query.height == undefined) errMsg += 'Missing image height; ';
  if (errMsg) {
    res.status(400).send(errMsg);
  } else {
    next();
  }
};

export default requestValidator;
