import { MongoClient } from "mongodb";

export default async function handler(req,res){
    if(req.method==="POST"){
        let {name,gender,country,hobby,contactNumber}=req.body
        try{
            const client=await MongoClient.connect("mongodb+srv://codebysidd:quAFzB3DITTw6kLg@cluster0.zn45ixq.mongodb.net/?retryWrites=true&w=majority")

            const db=client.db()
            const collection=db.collection("crud")
            const res=await collection.insertOne({
                name,
                gender,
                contactNumber,
                hobby,
                country
            })
            console.log(res)
        }catch(err){
            console.log(err)
        }finally {
            // client.close()
        }

        res.send({msg:"Done"})
    }
}