"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const page = () => {
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)

  const loadRoles = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/role')
      setRoles(response.data)
    } catch (error) {
      console.error('Error fetching roles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCheckboxChange = async (roleId, permission) => {
    try {
      const response = await axios.post('/api/role/managerole', { roleId, permission })
      console.log(response.data)
    } catch (error) {
      console.error('Error updating permission:', error)
    }
  }

  useEffect(() => {
    loadRoles()
  }, [])

  if (loading) {
    return  (
      <div className='mt-50 ml-150'>
          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500'></div>
      </div>
  );
  }

  return (
    <div className="p-4">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Role Name</th>
            <th className="p-2 border">Manage Role</th>
            <th className="p-2 border">Manage Permissions</th>
            <th className="p-2 border">View Permissions</th>
            <th className="p-2 border">Add Product</th>
            <th className="p-2 border">Edit Product</th>
            <th className="p-2 border">Display Product</th>
            <th className="p-2 border">Delete Product</th>
            <th className="p-2 border">Manage Vendor</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="odd:bg-white even:bg-gray-100">
              <td className="p-2 border">{role.name}</td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="role"
                  defaultChecked={role.permissions.includes('role')}
                  onChange={() => handleCheckboxChange(role.id, 'role')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="permission"
                  defaultChecked={role.permissions.includes('permission')}
                  onChange={() => handleCheckboxChange(role.id, 'permission')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="permissionview"
                  defaultChecked={role.permissions.includes('permissionview')}
                  onChange={() => handleCheckboxChange(role.id, 'permissionview')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="addproduct"
                  defaultChecked={role.permissions.includes('addproduct')}
                  onChange={() => handleCheckboxChange(role.id, 'addproduct')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="editproduct"
                  defaultChecked={role.permissions.includes('editproduct')}
                  onChange={() => handleCheckboxChange(role.id, 'editproduct')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="displayproduct"
                  defaultChecked={role.permissions.includes('displayproduct')}
                  onChange={() => handleCheckboxChange(role.id, 'displayproduct')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="deleteproduct"
                  defaultChecked={role.permissions.includes('deleteproduct')}
                  onChange={() => handleCheckboxChange(role.id, 'deleteproduct')}
                />
              </td>
              <td className="p-2 border">
                <input
                  type="checkbox"
                  value="managevendor"
                  defaultChecked={role.permissions.includes('managevendor')}
                  onChange={() => handleCheckboxChange(role.id, 'managevendor')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default page

