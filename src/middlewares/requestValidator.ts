import express from 'express';

const requestValidator = (req: express.Request, res: express.Response, next: Function) => {
    console.log('InValidator');
    next();
}

export default requestValidator;