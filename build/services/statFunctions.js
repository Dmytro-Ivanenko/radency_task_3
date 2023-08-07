export const calculateCategoryStats = (arr) => {
    const categoryStats = {};
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
        }
        else if (status === 'archived') {
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
//# sourceMappingURL=statFunctions.js.map