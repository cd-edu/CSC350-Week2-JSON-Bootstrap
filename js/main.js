const singers = [
    {
        name: "Vessel",
        song: "Caramel",
        dob: "December 22, 1993",
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

const singerTableBody = document.getElementById("singerTableBody");

singers.forEach(function(singer) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = singer.name;

    const songCell = document.createElement("td");
    songCell.textContent = singer.song;

    const dobCell = document.createElement("td");
    dobCell.textContent = singer.dob;

    row.appendChild(nameCell);
    row.appendChild(songCell);
    row.appendChild(dobCell);

    singerTableBody.appendChild(row);
});