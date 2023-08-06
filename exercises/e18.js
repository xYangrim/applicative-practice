import { maxBy } from "./e17";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const countsOfYears = data.asteroids.reduce((counts, asteroid) => {
    let year = asteroid.discoveryYear;
    counts[year] = (counts[year] || 0) + 1;
    return counts;
}, {})

let greatestYear = Object.keys(countsOfYears)[0];
Object.keys(countsOfYears).forEach((year) => {
    if(countsOfYears[year] > countsOfYears[greatestYear]) 

    greatestYear = year;
});

return parseInt(greatestYear, 10);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
