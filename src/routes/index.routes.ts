import express from 'express';
import { getGameCode, checkServerStatus } from '../controllers/index.controller';
import { protect } from '../middleware/auth.middleware';
const router = express.Router();

router.route('/getGameCode/:id').get(getGameCode);
router.route('/').get(checkServerStatus);

export default router;
