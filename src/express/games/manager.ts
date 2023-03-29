import { IGame } from './interface';
import GamesModel from './model';
import TeamModel from '../teams/model';

const getGame = (query) => {
    return GamesModel.find({ $or: [{ awayTeam: query }, { homeTeam: query }] }).exec;
};
const createGame = async (game) => {
    const homeTeam = await TeamModel.findOne({ name: game.homeTeam });
    const awayTeam = await TeamModel.findOne({ name: game.awayTeam });
    const curGame = await GamesModel.create(game);
    const homeScore = curGame.homeTeamGoals;
    const awayScore = curGame.awayTeamGoals;

    const updateTeamStats = async (team, goalsFor, goalsAgainst, points, wins, losses, draws) => {
        if (team) {
            team.GA += goalsAgainst;
            team.GF += goalsFor;
            team.Points += points;
            team.Won += wins;
            team.Lost += losses;
            team.Drawn += draws;
            await team.save();
        }
    };
    if (curGame.homeTeamGoals > curGame.awayTeamGoals) {
        updateTeamStats(homeTeam, homeScore, awayScore, 3, 1, 0, 0);
        updateTeamStats(awayTeam, awayScore, homeScore, 0, 0, 1, 0);
    } else if (curGame.homeTeamGoals < curGame.awayTeamGoals) {
        updateTeamStats(awayTeam, awayScore, homeScore, 3, 1, 0, 0);
        updateTeamStats(homeTeam, homeScore, awayScore, 0, 0, 1, 0);
    } else {
        updateTeamStats(homeTeam, homeScore, awayScore, 1, 0, 0, 1);
        updateTeamStats(homeTeam, awayScore, homeScore, 1, 0, 0, 1);
    }
};
export default [createGame, getGame];
