// Define findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Define fuzzyMatch function
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Define matchName function
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

