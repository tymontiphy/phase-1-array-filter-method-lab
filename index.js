// Code your solution here
// Function to find matching driver names (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names begin with the given letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'David', 'alice', 'bobby'];
const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' },
    { name: 'David', hometown: 'Miami' },
];

// Testing the functions
console.log(findMatching(drivers, 'Alice')); // Output: ['Alice', 'alice']
console.log(fuzzyMatch(drivers, 'B')); // Output: ['Bob', 'bobby']
console.log(matchName(driverObjects, 'Alice')); // Output: [{ name: 'Alice', hometown: 'New York' }]