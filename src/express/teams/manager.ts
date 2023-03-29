import { ITeam } from './interface';
import TeamModel from './model';

/**
 * Get filtered features.
 * @param {Partial<ITeam>} query - The query to filter the features.
 * @returns {Promise<ITeam[]>} - Promise object containing the filtered features.
 */
export const getTeams = (query): Promise<ITeam[]> => {
    return TeamModel.find({ name: query }).exec();
};

/**
 * Create a new feature.
 * @param {ITeam} feature - The feature to create.
 * @returns {Promise<IFeature>} - Promise object containing the created feature.
 */
export const createTeam = (team: ITeam) => {
    return TeamModel.create(team);
};
