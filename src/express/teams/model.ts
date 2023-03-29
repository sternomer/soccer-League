import * as mongoose from 'mongoose';
import config from '../../config';
import { setDefaultSettings, setErrorHandler } from '../../utils/mongoose';
import { ITeam } from './interface';

const TeamSchema = new mongoose.Schema<ITeam & mongoose.Document>({
    name: { type: String, required: true, unique: true },
    gamesPlayed: { type: Number, default: 0 },
    Won: { type: Number, default: 0 },
    Lost: { type: Number, default: 0 },
    Drawn: { type: Number, default: 0 },
    GF: { type: Number, default: 0 },
    GA: { type: Number, default: 0 },
    GD: { type: Number, default: 0 },
    Points: { type: Number, default: 0 },
});

TeamSchema.index({ data: 1 });

setDefaultSettings(TeamSchema);

setErrorHandler(TeamSchema);

const TeamModel = mongoose.model<ITeam & mongoose.Document>(config.mongo.teamsCollectionName, TeamSchema);

export default TeamModel;
