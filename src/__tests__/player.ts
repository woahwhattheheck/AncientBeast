import { describe, expect, jest, test } from '@jest/globals';

jest.mock('pixi', () => ({}), { virtual: true });
jest.mock('p2', () => ({}), { virtual: true });
jest.mock('phaser-ce', () => ({
	Point: class PointMock {},
	Polygon: class PolygonMock {},
	default: class PhaserMock {},
}));
jest.mock(
	'phaser',
	() => ({
		Signal: class SignalMock {},
		default: class PhaserMock {},
	}),
	{ virtual: true },
);

import Game from '../game';
import { Player, PlayerID } from '../player';

function makeScorePlayer(id: PlayerID, total: number): Player {
	return {
		id,
		getScore: jest.fn(() => ({ total })),
	} as unknown as Player;
}

function attachGame(players: Player[]): void {
	const game = {
		gameMode: players.length,
		players,
	} as unknown as Game;

	for (const player of players) {
		player.game = game;
	}
}

describe('Player.isLeader', () => {
	test('returns false for every player tied for the highest score', () => {
		const player0 = makeScorePlayer(0, 25);
		const player1 = makeScorePlayer(1, 25);
		attachGame([player0, player1]);

		expect(Player.prototype.isLeader.call(player0)).toBe(false);
		expect(Player.prototype.isLeader.call(player1)).toBe(false);
	});

	test('returns true only for a strictly higher score', () => {
		const leader = makeScorePlayer(0, 30);
		const trailing = makeScorePlayer(1, 25);
		attachGame([leader, trailing]);

		expect(Player.prototype.isLeader.call(leader)).toBe(true);
		expect(Player.prototype.isLeader.call(trailing)).toBe(false);
	});
});
