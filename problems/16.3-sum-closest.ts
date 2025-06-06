function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let minDifference = Infinity;

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
            const sum = nums[i] + nums[j] + nums[k];
            const difference = sum - target;

            if (Math.abs(difference) < Math.abs(minDifference)) {
                minDifference = difference;
            }

            if (difference === 0) {
                return target + difference;
            } else if (difference > 0) {
                moveK();
            } else if (difference < 0) {
                moveJ();
            }
        }
    }

    return target + minDifference;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
