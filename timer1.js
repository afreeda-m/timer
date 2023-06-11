const input = process.argv.slice(2);

// filter out elements in the input which are not numbers, and sort the array from lowest to highest values
const filteredTime = input.filter(num => isNaN(num) || num < 0 ? '' : num).sort(function(start, end) {return start-end});

// make a new array to store values that do not repeat
const removeRepeatedTime = [];

// loop through the filteredTime array to remove repeated numbers
for (const value of filteredTime) {
  if (!removeRepeatedTime.includes(value)) {
    removeRepeatedTime.push(value);
  }
}

// loop through the final array and convert the time into milliseconds and create a setTimeout function for the respective time
for (const time of removeRepeatedTime) {
  let timer = time * 1000;
  setTimeout(function () {
    process.stdout.write('\x07')
  }, timer);
};
