document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('gbv-report-form');

    function submitReport(event) {
        event.preventDefault();

        let victimName = document.getElementById('victimName').value;
        let incidentDate = document.getElementById('incidentDate').value;
        let location = document.getElementById('location').value;
        let description = document.getElementById('description').value;
        let contactInfo = document.getElementById('contactInfo').value;
        let typeOfViolence = document.getElementById('typeOfViolence').value;

        const reportObject = {
            victimName: victimName,
            incidentDate: incidentDate,
            location: location,
            description: description,
            contactInfo: contactInfo,
            typeOfViolence: typeOfViolence 
        };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reportObject)
        })
        .then(response => response.json())
        .then(data => {
            alert('Report submitted successfully!');
            reportForm.reset();
        })
        .catch(error => console.error('Error:', error));
    }

   
reportForm.addEventListener('submit', submitReport);

});


