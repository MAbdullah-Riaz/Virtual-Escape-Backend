import jwt from 'jsonwebtoken';
import { IRequest, IResponse } from '../dto/common.dto';
import { asyncHandler } from '../utils/helpers';

export const protect = asyncHandler(
  async (req: IRequest, res: IResponse, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not Authorized, Token failed');
      }
    }
    if (!token) {
      res.status(401);
      throw new Error('Not Authorized, No Token');
    }
  }
);
