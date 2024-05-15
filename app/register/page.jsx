"use client"
import React, { useState } from 'react'

const Registerpage = () => {
  const [name,setName]= useState()
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    // 
  }
  return (
    <div className='container col-md-4 offset-md-4 pb-5'>
<form onSubmit={handleSubmit}>
  <input type="text" className='form-control mb-4 p-4' value={} onChange={}/>
</form>
    </div>
  )
}

export default Registerpage