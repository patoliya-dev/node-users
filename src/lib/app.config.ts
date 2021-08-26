import { NextFunction, Request, Response } from 'express';
import logger from './Logger';

export const handleError = async (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!err) { return next() }
    const errorResponse = Object.assign({ stack: err.stack }, err.output && err.output.payload ? err.output.payload : err)
    logger.err(err, true)
    const statusCode = err.output && err.output.statusCode ? err.output.statusCode : 500
    return res.status(statusCode).json(errorResponse)
}