/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let maxChair = 0;
    let current = 0;
    for (const i of s) {
        if (i == "E") {
            current++;
        } else if (i == "L") {
            current--;
        }
        if (current > maxChair) {
            maxChair = current;
        }
    }
    return maxChair
};
