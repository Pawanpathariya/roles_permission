'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('/api/login', {
            email,
            password
        })
        if(!response.data.user.role){
          alert("role not assign yet")
          return;
        }
     localStorage.setItem('user', JSON.stringify(response.data.user))
      router.push('/Admindashboard')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="m-auto w-1/3 p-5 bg-white rounded shadow-xl">
        <h1 className="text-3xl text-center mb-4">Login</h1>
   
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>

      </div>
    </div>
  )
}

export default page
