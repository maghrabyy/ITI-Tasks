import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [employees, setEmployees] = useState([])
  const [employeeId, setEmployeeId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')
  const [department, setDepartment] = useState('')
  const [isEditing,setIsEditing] = useState(false)

  useEffect(()=>{
    const fetchEmployees = async()=>{
      const res = await fetch('https://iti-task-1-default-rtdb.firebaseio.com/employees.json')
      if(res.ok){
        const data = await res.json()
        const employeesList = []
        for (const id in data) {
          employeesList.push({...data[id], id})
        }
        setEmployees([...employeesList])
      }
    }
    fetchEmployees()
  }, [employees])

  const clearInput = ()=>{
    setFirstName('')
    setLastName('')
    setAge('')
    setSalary('')
    setDepartment('')
  }

  const formSubmitHandler = async(e)=>{
    e.preventDefault();
    if(!isEditing){
      if(firstName && lastName && age && salary && department){
        const res = await fetch('https://iti-task-1-default-rtdb.firebaseio.com/employees.json', {
          method: 'POST',
          body: JSON.stringify({firstName, lastName, age:Number(age), salary:Number(salary), department})
        })
        console.log(res)
        clearInput();
      }
    }else{
    fetch(`https://iti-task-1-default-rtdb.firebaseio.com/employees/${employeeId}.json`, {
      method: 'PUT',
      body: JSON.stringify({firstName, lastName, age:Number(age), salary:Number(salary), department})
    })
    clearInput();
    setIsEditing(false)
    }
  }

  const deleteEmployee = (id)=>{
    fetch(`https://iti-task-1-default-rtdb.firebaseio.com/employees/${id}.json`, {
      method: 'DELETE'
    })
  }
  const updateEmployee = (id, firstName, lastName, age, salary, department)=>{
    setIsEditing(true)
    setEmployeeId(id)
    setFirstName(firstName)
    setLastName(lastName)
    setAge(age)
    setSalary(salary)
    setDepartment(department)
  }
  return (
    <>
    <form className='flex flex-col gap-1 items-center py-4' onSubmit={formSubmitHandler}>
      {isEditing &&<>
        <label htmlFor="id">ID</label>
        <input value={employeeId} onChange={e=>setEmployeeId(e.target.value)} className='inpt' type="text" name="emp-id" id="id" readOnly disabled />
      </> }
      <label htmlFor="firstName">First Name</label>
      <input value={firstName} onChange={e=>setFirstName(e.target.value)} className='inpt' type="text" name="first-name" id="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input value={lastName} onChange={e=>setLastName(e.target.value)} className='inpt' type="text" name="last-name" id="lastName" />
      <label htmlFor="age">Age</label>
      <input value={age} onChange={e=>setAge(e.target.value)} className='inpt' type="number" name="age" id="age" />
      <label htmlFor="salary">Salary</label>
      <input value={salary} onChange={e=>setSalary(e.target.value)} className='inpt'type="number" name="salary" id="salary" />
      <label htmlFor="department">Department</label>
      <input value={department} onChange={e=>setDepartment(e.target.value)}className='inpt' type="text" name="dept" id="department" />
      <button className='btn' onClick={formSubmitHandler}>{isEditing?'Update Employee' :'Add Employee'}</button>
    </form>
    <div className="relative overflow-x-auto px-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Salary
                </th>
                <th scope="col" className="px-6 py-3">
                    Department
                </th>
                <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
        </thead>
        <tbody>
          {employees.map(employee=>{
            return (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.id}
                </td>
                <td className="px-6 py-4">
                  {employee.firstName}
                </td>
                <td className="px-6 py-4">
                  {employee.lastName}
                </td>
                <td className="px-6 py-4">
                  {employee.age}
                </td>
                <td className="px-6 py-4">
                  {employee.salary}
                </td>
                <td className="px-6 py-4">
                  {employee.department}
                </td>
                <td className='px-6 py-4 space-x-2'>
                  <button onClick={()=>deleteEmployee(employee.id)} className='btn bg-red-600'>Delete</button>
                  <button onClick={()=>updateEmployee(employee.id,employee.firstName,employee.lastName,employee.age,employee.salary,employee.department)} className='btn bg-green-600'>Update</button>
                </td>
              </tr>
            )
          })}
  
        </tbody>
    </table>
</div>

    </>
  )
}

export default App
