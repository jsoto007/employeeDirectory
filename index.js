fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(employeeData => employeeData.forEach(employee => renderBtn(employee)))

function renderBtn(employees) {
    let employeeInfo = document.createElement('ul');
    employeeInfo.className = 'infoBox'
    employeeInfo.innerHTML = `
    <button class="infoBtn">${employees.name}</button><br>
   
`
    console.log(employeeInfo)
    document.getElementById("p-01").appendChild(employeeInfo)

    addsEventListener(employees)
}


function addsEventListener(employees) {
    const btns = document.querySelectorAll(".infoBtn");
    console.log(btns);
    btns.forEach(btn => btn.addEventListener('click', function () {
        console.log(`${employees.name}`)
    }))

}

// function addEventListeners() {

//     const btns = document.querySelectorAll(".infoBtn");
//     btns.addEventListeners('click', (e) => {
//         console.log(e)
//     })

// const btns = document.querySelectorAll(".infoBtn");
// for (let i = 0; i < btns.length; i++) {
//     btns.forEach(btn => btn.addEventListener('click', function () {
//         console.log('does this work')
//     }, ))

// }
// }
// btns.forEach(btn => btn.addEventListener('click', function () {
//     console.log('does this work')
// }, {
//     once: true
// }))