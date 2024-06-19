document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('gbv-report-form');

    function submitReport(event) {
        event.preventDefault();

        let victimName = document.getElementById('victim_name').value;
        let incidentDate = document.getElementById('incident_date').value;
        let location = document.getElementById('location').value;
        let description = document.getElementById('description').value;
        let contactInfo = document.getElementById('contact_info').value;
        let typeOfViolence = document.getElementById('type_of_violence').value;

        const reportObject = {
            victim_name: victimName,
            incident_date: incidentDate,
            location: location,
            description: description,
            contact_info: contactInfo,
            type_of_violence: typeOfViolence 
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