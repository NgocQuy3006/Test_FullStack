const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3000

let employees = []
let leaveRequests = []

// GET employees
app.get("/employees", (req, res) => {
    res.status(200).json(employees)
})

// POST employee
app.post("/employees", (req, res) => {

    const {id, name, department, leaveBalance} = req.body

    const employee = {
        id,
        name,
        department,
        leaveBalance
    }

    employees.push(employee)

    res.status(201).json(employee)
})

// GET employee by id
app.get("/employees/:id", (req,res)=>{

    const emp = employees.find(e=>e.id == req.params.id)

    if(!emp){
        return res.status(404).json({message:"Not found"})
    }

    res.json(emp)

})

// DELETE employee
app.delete("/employees/:id",(req,res)=>{

    employees = employees.filter(e=>e.id != req.params.id)

    res.json({message:"Deleted"})
})

// CREATE leave
app.post("/leave",(req,res)=>{

    const {employeeId,startDate,endDate,reason} = req.body

    const emp = employees.find(e=>e.id == employeeId)

    if(!emp){
        return res.status(404).json({message:"Employee not found"})
    }

    if(emp.leaveBalance <=0){
        return res.status(400).json({message:"No leave balance"})
    }

    emp.leaveBalance -= 1

    const leave = {
        id: leaveRequests.length + 1,
        employeeId,
        startDate,
        endDate,
        reason,
        status:"pending"
    }

    leaveRequests.push(leave)

    res.status(201).json(leave)

})

// GET leave
app.get("/leave",(req,res)=>{

    res.json(leaveRequests)

})

// APPROVE leave
app.patch("/leave/:id/approve",(req,res)=>{

    const leave = leaveRequests.find(l=>l.id == req.params.id)

    if(!leave){
        return res.status(404).json({message:"Leave not found"})
    }

    leave.status = "approved"

    res.json(leave)

})

app.listen(PORT,()=>{
    console.log("Server running on port 3000")
})