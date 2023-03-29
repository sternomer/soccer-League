import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as GameController from './controller';
import * as validator from './validator.schema';

const gameRouter: Router = Router();

gameRouter.get('/', ValidateRequest(validator.getGameRequestSchema), wrapMiddleware(GameController.getGame));
gameRouter.post('/', ValidateRequest(validator.createGameRequestSchema), wrapMiddleware(GameController.createGame));
