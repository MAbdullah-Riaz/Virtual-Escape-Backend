import { Request, Response, NextFunction } from 'express';

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncHandler = (fn: AsyncHandler): AsyncHandler =>
  function asyncUtilWrap(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const fnReturn = fn(req, res, next);
    return Promise.resolve(fnReturn).catch(next);
  };
