import * as Joi from 'joi';

export const getTeamRequestSchema = Joi.object({
    query: Joi.object({
        name: Joi.string().min(2).required(),
    }),
    body: {},
    params: {},
});

export const createTeamRequestSchema = Joi.object({
    body: {
        name: Joi.string().required(),
    },
    query: {},
    params: {},
});

export const deleteFileRequestSchema = Joi.object({});
