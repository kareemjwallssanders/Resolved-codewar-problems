/* 
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // set answer to be the first item in an array
        var ans = args[0];
        for (let i = 1; i < args.length; i++) { // change where the loop starts
            // compare each item in the array to current answer
            if (ans > args[i]) {
                // each other smaller than the current answer replaces it
                ans = args[i];
            }
        }
        // return the answer
        return ans;
    }
}
