import mongoose from "mongoose";


const DBCon=async()=>{
    try {
          mongoose.connect(env.MONGDB_ULR)
          console.log('MONGODB IS CONNECTED')
    } catch (error) {
        console.log(error)
    }
}

export default DBCon