"use client"
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const CreateRolePage = () => {
const [roleName, setRoleName] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/role', {
        roleName
      })
      console.log(response.data)
      alert('Role created successfully')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create role')
    }
  }
  return (
    <div className="w-full mt-10 bg-white p-8 rounded-lg shadow-lg ">
      <h1 className="text-3xl font-semibold mb-4">Create Role</h1>
  
        <div className="mb-4">
          <label htmlFor="roleName" className="block text-gray-700 text-sm font-bold mb-2">
            Role Name:
          </label>
          <input type="text" id="roleName" name="roleName" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setRoleName(e.target.value)} />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} >
          Create Role
        </button>
    
    </div>
  )
}

export default CreateRolePage

