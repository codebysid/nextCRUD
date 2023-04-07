import ShowUsers from '@/components/ShowUsers'
import React from 'react'
import { MongoClient } from 'mongodb'

const showUsers = ({res}) => {
  return <ShowUsers dataToSend={res}/>
}
export default showUsers

export async function getServerSideProps(){
  var res
  try{
      const client=await MongoClient.connect("mongodb+srv://codebysidd:quAFzB3DITTw6kLg@cluster0.zn45ixq.mongodb.net/?retryWrites=true&w=majority")

      const db=client.db()
      const collection=db.collection("crud")
      res=await collection.find().toArray()
      await client.close()
  }catch(err){
      console.log(err)
  }
  return{
      props:{res:JSON.stringify(res)}
  }
}