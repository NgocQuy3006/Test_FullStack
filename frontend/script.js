const API = "http://localhost:3000"

// ADD EMPLOYEE
function addEmployee(){

fetch(API + "/employees",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
id:document.getElementById("id").value,
name:document.getElementById("name").value,
department:document.getElementById("department").value,
leaveBalance:Number(document.getElementById("leaveBalance").value)
})
})
.then(()=>{
getEmployees()
})

}



// GET EMPLOYEES
function getEmployees(){

fetch(API + "/employees")
.then(res=>res.json())
.then(data=>{

let html=""

data.forEach(e=>{

html += `
<tr>
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.department}</td>
<td>${e.leaveBalance}</td>
</tr>
`

})

document.getElementById("employeeTable").innerHTML = html

})

}



// CREATE LEAVE
function createLeave(){

fetch(API + "/leave",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
employeeId:document.getElementById("empId").value,
startDate:document.getElementById("startDate").value,
endDate:document.getElementById("endDate").value,
reason:document.getElementById("reason").value
})
})
.then(()=>{
getLeaves()   // reload bảng leave
})

}



// GET LEAVES
function getLeaves(){

fetch(API + "/leave")
.then(res=>res.json())
.then(data=>{

let html=""

data.forEach(l=>{

const status = l.status ? l.status : "pending"

html += `
<tr>
<td>${l.id}</td>
<td>${l.employeeId}</td>
<td>${l.startDate}</td>
<td>${l.endDate}</td>
<td>${l.reason}</td>
<td>${status}</td>
</tr>
`

})

document.getElementById("leaveTable").innerHTML = html

})

}