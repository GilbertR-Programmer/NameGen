// Function to get a random element from an array
function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to fetch names from a local JSON file
async function fetchNames() {
    try {
        const response = await fetch('names.json');
        const data = await response.json();
        return data.names; // Return the names array from the JSON file
    } catch (error) {
        console.error('Error fetching the names:', error);
        return []; // Return an empty array in case of error
    }
}

// Function to generate a new character with a random name
async function generateName() {
    const names = await fetchNames(); // Fetch the names from the local file
    if (names.length > 0) {
        document.getElementById("randomName1").innerText = randomArrayElement(names);
        document.getElementById("randomName2").innerText = randomArrayElement(names);
        document.getElementById("randomName3").innerText = randomArrayElement(names);
        document.getElementById("randomName4").innerText = randomArrayElement(names);
        document.getElementById("randomName5").innerText = randomArrayElement(names);
    } else {
        document.getElementById("randomName").innerText = 'No names found!';
    }
}

// Call generateName on window load
window.onload = generateName;
