
function usersData(user, index){
    let tbody  =document.querySelector('#tbody')
    let row = document.createElement('tr')
    row.innerHTML = `
    <td>${index + 1}</td>
     <td>${user.typeOfViolence}</td>
      <td>${user.victimName}</td>
       <td>${user.incidentDate}</td>
        <td>${user.location}</td>
         <td>${user.description}</td>
          <td>${user.contactInfo}</td>`;
          tbody.appendChild(row);



}



function getFullData(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => {
        users.forEach((data, index) => usersData(data, index));
    })
    
}
getFullData()