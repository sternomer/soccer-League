import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as TeamsManager from './manager';

export const getTeams = async (req: Request, res: Response) => {
    res.json(await TeamsManager.getTeams(req.query.name));
};

export const createTeam = async (req: Request, res: Response) => {
    res.json(await TeamsManager.createTeam(req.body));
};

export const deleteFile = async (req: Request, res: Response) => {
    const { bucketName, objectName } = req.params;

    res.status(StatusCodes.OK).send({ bucketName, objectName });
};
