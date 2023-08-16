document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var rollNumber = document.getElementById("rollNumber").value;
    var studentName = document.getElementById("studentName").value;
    var date = document.getElementById("date").value;
    var status = document.getElementById("status").value;
    var errorMsgElement = document.getElementById("error-msg");
    errorMsgElement.innerText = "";

    // Basic client-side validation
    if (rollNumber.trim() === "" || isNaN(rollNumber)) {
        errorMsgElement.innerText = "Please enter a valid roll number.";
        return;
    }
    if (studentName.trim() === "") {
        errorMsgElement.innerText = "Please enter a valid student name.";
        return;
    }

    // Create an object to hold the attendance data
    var attendanceData = {
        rollNumber: rollNumber,
        studentName: studentName,
        date: date,
        status: status
    };

    // Send an AJAX POST request to the backend API
    fetch("/attendance/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attendanceData)
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response from the server, if needed
        console.log(data);

        // If successful response, add the new row to the table
        addRowToTable(rollNumber, studentName, date, status);
    })
    .catch(error => {
        // Handle any errors that occurred during the AJAX request
        console.error("An error occurred:", error);
    });

    // Clear the form fields after submission
    document.getElementById("rollNumber").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("date").value = "";
});

// Function to add a new row to the table
function addRowToTable(rollNumber, studentName, date, status) {
    var table = document.getElementById("attendanceTable");
    var newRow = table.insertRow(-1);

    var rollNumberCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var dateCell = newRow.insertCell(2);
    var statusCell = newRow.insertCell(3);

    rollNumberCell.innerHTML = rollNumber;
    nameCell.innerHTML = studentName;
    dateCell.innerHTML = date;
    statusCell.innerHTML = status;
}
