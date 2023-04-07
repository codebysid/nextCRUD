import React, { useEffect, useState } from 'react'
import classes from "../styles/index.module.css"
import { useFormik } from 'formik'
import { validateSchema } from './schemas'
import Link from 'next/link'

export const hobbyList=["Dancing","Singing","Sketching","Coding","Designing","Travelling"]
const initialValues={
    name:"",
    contactNumber:"",
    gender:"",
    country:"",
}
const Index = () => {
    const [hobby,setHobby]=useState(new Array(hobbyList.length).fill(false))

    let {values,handleSubmit,handleChange,errors}=useFormik({
        initialValues:initialValues,
        validationSchema:validateSchema,
        onSubmit:async(values)=>{
            let {name,gender,contactNumber,country}=values
            const res=await fetch("/api/saveToDB",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name,gender,contactNumber,country,hobby
                })
            })

            const data=await res.json()
            console.log(data)
        }
    })

    const handleHobbies=(position)=>{
        let updateHobby=hobby.map((ele,key)=>position===key ? !ele: ele)
        setHobby(updateHobby)
    }
  return (
    <div className={classes.formDiv}>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className={classes.label}>Name</label>
        <div>
            <input 
            type="text" 
            id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            />
        </div>
            <p className={classes.error}>{errors.name}</p>
        </div>

        <div>
            <label htmlFor="contactNumber" className={classes.label}>Contact Number</label>
        <div>
            <input 
            type="number" 
            id="contactNumber" 
            name='contactNumber'
            value={values.contactNumber}
            onChange={handleChange}
            />
        </div>
            <p className={classes.error}>{errors.contactNumber}</p>
        </div>

        <div value={values.gender} name="gender" onChange={handleChange} id='genderLabel' className={classes.genderDiv}>
        <label htmlFor="genderLabel" className={classes.label}>Select Your Gender:</label>
            <div>
            <input type="radio" name="gender" id="male" value="male"/>
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="female"/>
            <label htmlFor="female">Female</label>

            <input type="radio" name="gender" id="others" value="others"/>
            <label htmlFor="others">Others</label>
            </div>
            <p className={classes.error}>{errors.gender}</p>
        </div>

        <div>
        <label htmlFor="checkbox" className={classes.label}>Select Your Hobbies:</label>
        <div id='checkbox' className={classes.checkboxDiv}>
        {
            hobbyList.map((ele,position)=>{
                return (
                    <div key={position}>
                        <input 
                        type="checkbox" 
                        value={values.hobby}
                        id={ele} 
                        name="hobby"
                        onChange={(e)=>handleHobbies(position)}
                        checked={hobby[position]}
                        />

                        <label htmlFor={ele}>{ele}</label>
                    </div>
                    
                )
            })
        }
        </div>
        </div>

        <div>
        <label htmlFor="countryDropDown" className={classes.label}>Select Country</label>
        <div id='countryDropDown'>        
            <select onChange={handleChange} value={values.country} name='country'>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
        </select>
        </div>
        <p className={classes.error}>{errors.country}</p>
        </div>

        <button type='submit'>Submit</button>
        <Link className={classes.link} href="/showUsers">Show Users</Link>
      </form>
    </div>
  )
}

export default Index
