import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
        User: {userid}
        <div>Subpage {userid}</div> {/* Added example of subpage content */}
    </div>
  )
}

export default User