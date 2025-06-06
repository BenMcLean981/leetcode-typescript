function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    let results: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i - 1]) {
            i++;
        }

        let j = i + 1;
        let k = nums.length - 1;

        function moveJ() {
            j++;

            while (nums[j] === nums[j - 1] && j < k) {
                j++;
            }
        }

        function moveK() {
            k--;

            while (nums[k] === nums[k + 1] && j < k) {
                k--;
            }
        }

        while (j < k) {
            const result = nums[i] + nums[j] + nums[k];

            if (result === 0) {
                results.push([nums[i], nums[j], nums[k]]);

                moveJ();
            } else if (result > 0) {
                moveK();
            } else if (result < 0) {
                moveJ();
            }
        }
    }

    return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
