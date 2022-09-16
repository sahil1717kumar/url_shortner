const mongoose=require('mongoose')

const uri = process.env.DB

module.exports = ()=>{
    return mongoose.connect(uri)
}