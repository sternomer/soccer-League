import * as env from 'env-var';
import './dotenv';

const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
        useCors: env.get('USE_CORS').default('false').asBool(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asString(),
        teamsCollectionName: env.get('MONGO_TEAMS_COLLECTION_NAME').default('teams').asString(),
        gamesCollectionName: env.get('MONGO_GAMES_COLLECTION_NAME').default('games').asString(),
    },
};

export default config;
