import { getWalkerCites } from "./database";
const walkerCities = getWalkerCites()

// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []

    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {

        // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
            // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }

    // After the loop is done, return the assignments array
    return assignments
}

