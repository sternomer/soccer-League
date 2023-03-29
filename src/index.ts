import * as mongoose from 'mongoose';
import config from './config';
import Server from './express/server';
import logger from './utils/logger';

const { mongo, service } = config;

const initializeMongo = async () => {
    logger.log('info', 'Connecting to Mongo...');

    mongoose.set('strictQuery', true);
    await mongoose.connect(mongo.uri).catch((err) => {
        throw new Error(`Error connecting to Mongo: ${err.message}`);
    });

    logger.log('info', 'Mongo connected');
};

const main = async () => {
    await initializeMongo();

    const server = new Server(service.port);

    await server.start();

    logger.log('info', `Server started on port: ${service.port}`);
};

main().catch((err) => logger.log('error', err));
