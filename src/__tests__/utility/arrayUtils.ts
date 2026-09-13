import { Creature } from '../../creature';
import { filterCreature } from '../../utility/arrayUtils';
import { Hex } from '../../utility/hex';
import { Team } from '../../utility/team';

function makeCreature(id: number, team: number): Creature {
	return Object.assign(Object.create(Creature.prototype), {
		id,
		team,
		hexagons: [],
	}) as Creature;
}

function makeHex(creature?: Creature): Hex {
	return { creature } as Hex;
}

describe('filterCreature', () => {
	it('classifies the encountered creature after excluding it in pierce mode', () => {
		const source = makeCreature(1, 0);
		const enemy = makeCreature(2, 1);
		const after = makeHex();

		expect(
			filterCreature(
				[makeHex(enemy), after],
				false,
				true,
				undefined,
				source,
				1,
				'pierce',
				Team.Enemy,
			),
		).toEqual([]);
	});

	it('stops before an excluded non-target in targetOnly mode', () => {
		const source = makeCreature(1, 0);
		const ally = makeCreature(2, 0);
		const before = makeHex();
		const after = makeHex();

		expect(
			filterCreature(
				[before, makeHex(ally), after],
				false,
				true,
				undefined,
				source,
				1,
				'targetOnly',
				Team.Enemy,
			),
		).toEqual([before]);
	});

	it('preserves stop-mode cut behavior when the occupied hex is excluded', () => {
		const source = makeCreature(1, 0);
		const enemy = makeCreature(2, 1);
		const before = makeHex();
		const after = makeHex();

		expect(
			filterCreature(
				[before, makeHex(enemy), after],
				false,
				true,
				undefined,
				source,
				1,
				'stop',
				Team.Enemy,
			),
		).toEqual([before]);
	});
});
