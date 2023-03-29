import * as Joi from 'joi';

export const getGameRequestSchema = Joi.object({
    query: Joi.object({
        homeTeam: Joi.string().min(2).optional(),
        awayTeam: Joi.string().min(2).optional(),
    }),
    body: {},
    params: {},
});

export const createGameRequestSchema = Joi.object({
    query: {},
    body: {
        homeTeam: Joi.string().required(),
        awayTeam: Joi.string().required(),
        homeTeamGoals: Joi.number().required(),
        awayTeamGoals: Joi.number().required(),
        date: Joi.date().optional(),
    },
    params: {},
});
