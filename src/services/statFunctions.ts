import { INote } from '../models/models.js';

export const calculateCategoryStats = (arr: INote[]) => {
	const categoryStats: Record<string, { active: number; archived: number }> =
		{};

	for (const note of arr) {
		const { category, status } = note;

		if (!categoryStats[category]) {
			categoryStats[category] = {
				active: 0,
				archived: 0,
			};
		}

		if (status === 'active') {
			categoryStats[category].active++;
		} else if (status === 'archived') {
			categoryStats[category].archived++;
		}
	}

	const statsArray = Object.keys(categoryStats).map((category) => ({
		category,
		active: categoryStats[category].active,
		archived: categoryStats[category].archived,
	}));

	return statsArray;
};
