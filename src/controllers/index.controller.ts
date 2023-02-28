import { IRequest, IResponse } from '../dto/common.dto';
import tokenTable from '../model/index.controller';
import jwt from 'jsonwebtoken';
import config from 'config';
import { asyncHandler } from '../utils/helpers';

export const checkServerStatus = asyncHandler(
  async (req: IRequest, res: IResponse) => {
    res.header('Access-Control-Allow-Origin', '*');
    return res.sendStatus(200);
  }
);

export const getGameCode = asyncHandler(
  async (req: IRequest, res: IResponse) => {
    const gameCode = await tokenTable.findOne({ gameCode: req.params.id });
    res.header('Access-Control-Allow-Origin', '*');

    if (gameCode) {
      const jwtToken = jwt.sign(
        { _id: gameCode._id },
        config.get('jwtPrivateKey')
      );
      return res.status(200).send(jwtToken);
    } else {
      return res.sendStatus(404);
    }
  }
);
