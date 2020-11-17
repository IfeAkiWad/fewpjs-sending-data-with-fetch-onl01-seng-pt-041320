// Add your code here
function submitData(name, email) {
    const body = document.querySelector("body")

   
    let personData = {
       name: 'Steve',
       email: 'steve@steve.com'
   };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(personData)
  };
  
  fetch("http://localhost:3000/users", configObj) 
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        // Object.assign( object, {userName: 'Byron', userEmail: 'byron@email.com'} );
        document.body.innerHTML = object['id']
    });
}
