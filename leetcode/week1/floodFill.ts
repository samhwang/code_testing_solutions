/**
 * @link https://leetcode.com/problems/flood-fill/
 */
function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    color: number
): number[][] {
    // Get starting color
    const startingColor = image[sr][sc];

    const sameColor = image[sr][sc] === color;
    if (sameColor) {
        return image;
    }

    image[sr][sc] = color;
    if (sr + 1 < image.length && image[sr + 1][sc] === startingColor) {
        image = floodFill(image, sr + 1, sc, color);
    }
    if (sc + 1 < image[0].length && image[sr][sc + 1] === startingColor) {
        image = floodFill(image, sr, sc + 1, color);
    }
    if (sr - 1 > -1 && image[sr - 1][sc] === startingColor) {
        image = floodFill(image, sr - 1, sc, color);
    }
    if (sc - 1 > -1 && image[sr][sc - 1] === startingColor) {
        image = floodFill(image, sr, sc - 1, color);
    }
    return image;
}
