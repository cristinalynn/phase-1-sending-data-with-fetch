function submitData(name, email) {
    return  fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object[ "id" ]
            // const element = document.createElement('div')
            // element.innerHTML = object.id
            // document.appendChild(element)
            console.log(object, 'my object');
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })

}