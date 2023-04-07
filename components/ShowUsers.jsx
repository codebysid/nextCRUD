import React from 'react'
import { hobbyList } from './Index'
import classes from "../styles/showUsers.module.css"

const ShowUsers = ({dataToSend}) => {
    dataToSend=JSON.parse(dataToSend)
  return (
    <div className={classes.showUserDiv}>
      {
        dataToSend && dataToSend.map((ele,key)=>{
            return (
                <div>
                    <h2> 
                        <span> 
                            Name:
                        </span>
                        {ele.name}
                    </h2>

                    <p><span>Contact Number:</span>
                    {ele.contactNumber}</p>

                    <p>
                        <span>
                            Gender:
                        </span>
                        {ele.gender}
                    </p>

                    <p>
                        <span>
                            Hobbies:
                        </span>
                        {
                            ele.hobby.map((ele,key)=>{
                                return(
                                    <>
                                        {
                                            ele && <>
                                                {hobbyList[key]}
                                            </>
                                        }
                                    </>
                                )
                            })
                        }
                    </p>

                    <p>
                        <span>Country:</span>
                        {ele.country}
                    </p>

                </div>
            )
        })
      }
    </div>
  )
}

export default ShowUsers
