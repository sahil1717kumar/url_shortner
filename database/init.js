const mongoose=require('mongoose')

const uri = "mongodb+srv://app:glitchinthematrix@cluster0.6kr1www.mongodb.net/?retryWrites=true&w=majority"

module.exports = ()=>{
    return mongoose.connect(uri)
}