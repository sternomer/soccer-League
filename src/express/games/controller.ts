import { Request, Response } from 'express';

export const getGame = async (req: Request, res: Response) => {
    res.json(await GamesManager.getGames(req.query.value));
};

export const createGame = async (req: Request, res: Response) => {
    res.json(await GamesManager.createGame(req.body));
};
