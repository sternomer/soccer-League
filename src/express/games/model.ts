import mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { IGame } from './interface';

const GamesSchema = new mongoose.Schema<IGame & mongoose.Document>({
    homeTeam: { type: String, ref: 'teams', required: true },
    awayTeam: { type: String, ref: 'teams', required: true },
    homeTeamGoals: { type: Number, required: true },
    awayTeamGoals: { type: Number, required: true },
    date: { type: Date, required: true },
});
setDefaultSettings(GamesSchema);
setErrorHandler(GamesSchema);

const GamesModel = mongoose.model<IGame & mongoose.Document>(config.mongo.gamesCollectionName, GamesSchema);

export default GamesModel;
