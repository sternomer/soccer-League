import { Router } from 'express';
import wrapMiddleware from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as TeamsController from './controller';
import * as validator from './validator.schema';

const teamsRouter: Router = Router();

teamsRouter.get('/', ValidateRequest(validator.getTeamRequestSchema), wrapMiddleware(TeamsController.getTeams));
teamsRouter.post('/', ValidateRequest(validator.createTeamRequestSchema), wrapMiddleware(TeamsController.createTeam));

export default teamsRouter;
