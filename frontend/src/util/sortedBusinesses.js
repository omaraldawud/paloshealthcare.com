/**
 * Sort businesses with sponsored ones on top.
 * Keeps relative order for non-sponsored businesses.
 *
 * @param {Array} businesses - Array of business objects
 * @returns {Array} Sorted array
 */
export const sortBusinesses = (businesses) => {
  if (!Array.isArray(businesses)) return [];

  return [...businesses].sort((a, b) => {
    if (a.isSponsored && !b.isSponsored) return -1;
    if (!a.isSponsored && b.isSponsored) return 1;
    return 0;
  });
};
