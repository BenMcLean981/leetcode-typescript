function maxArea(heights: number[]): number {
    let result = 0;

    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        const w = right - left;
        const h = Math.min(heights[left], heights[right]);

        result = Math.max(w * h, result);

        if (heights[left] < heights[right]) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    return result;
}
