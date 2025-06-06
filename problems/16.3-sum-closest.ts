function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closestResult = 0;
    let minDifference = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const difference = Math.abs(sum - target);

            if (difference < minDifference) {
                minDifference = difference;
                closestResult = sum;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return closestResult;
}
