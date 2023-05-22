import React from 'react'
import "./AdminLanding.css"


function AdminLanding() {
  return (
    <>
    <div className="table-postion">
    <table className="admin-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JohnDoe</td>
          <td>johndoe@example.com</td>
          <td className='action-button'>
            <button>Ban</button>
            <button>Unban</button>
          </td>
        </tr>
        <tr>
          <td>JaneSmith</td>
          <td>janesmith@example.com</td>
          <td className='action-button'>
            <button>Ban</button>
            <button>Unban</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
     
    </>
  )
}

export default AdminLanding