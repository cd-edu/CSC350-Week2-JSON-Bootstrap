// Array containing singer objects and their name, song, and date-of-birth information.
const singers = [
    {
        name: "Vessel",
        song: "Caramel",
        dob: "Not publicly disclosed",
    },
    {
        name: "Stevie Nicks",
        song: "Dreams",
        dob: "May 26, 1948",
    },
    {
        name: "Ella Langley",
        song: "Loving Life Again",
        dob: "May 3, 1999",
    },
    {
        name: "Selena Quintanilla-Pérez",
        song: "I Could Fall in Love with You",
        dob: "April 16, 1971",
    }

];

// Reference to the HTML table body where the singer rows will be displayed.
const singerTableBody = document.getElementById("singerTableBody");

// Loop through each singer object and create one table row for its information.
singers.forEach(function(singer) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = singer.name;

    const songCell = document.createElement("td");
    songCell.textContent = singer.song;

    const dobCell = document.createElement("td");
    dobCell.textContent = singer.dob;

    // Add the three data cells to the current table row.
    row.appendChild(nameCell);
    row.appendChild(songCell);
    row.appendChild(dobCell);

    // Add the completed singer row to the Bootstrap table body.
    singerTableBody.appendChild(row);
});