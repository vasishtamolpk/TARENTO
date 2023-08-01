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

    // You can add more validation rules as needed

    // If validation passes, you can proceed with form submission
    // You need to handle form submission using server-side code
    // (PHP, Python, Node.js, etc.) and store the data in the database.
    // You can use AJAX to submit the form data asynchronously to the server.

    // For example, using JavaScript fetch API for AJAX submission:
    // fetch("add_attendance.php", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ rollNumber: rollNumber, studentName: studentName, date: date, status: status })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle the response from the server (e.g., display success message, update table)
    //     // For now, we'll manually add a new row to the table with the submitted data
    //     addRowToTable(rollNumber, studentName, date, status);
    // })
    // .catch(error => {
    //     // Handle any errors that occurred during form submission
    // });

    // For this template, we'll manually add a new row to the table with the submitted data
    addRowToTable(rollNumber, studentName, date, status);

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
