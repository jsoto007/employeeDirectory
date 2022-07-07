fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(data => {
        return console.log(data)
    })