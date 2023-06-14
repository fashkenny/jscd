const mongoose = require('mongoose')

// const set07DB = "mongodb://localhost/set07Database"
const set07DB = "mongodb://0.0.0.0:27017/set07Database"


const Database = async() => {
     try {
        const dbconnect = await mongoose.connect(set07DB)
        console.log("")
        console.log(`Database connected to ${dbconnect.connection.host}`)
     } 
     catch (error) {
        console.log("An error occurred while connecting to database ", error)
     }
}

module.exports = Database()

// mongoose.connect(set07DB).then(()=>{
//     console.log(`db is connected`)
// }).catch((err)=>{
//     console.log(err)
// })

// module.exports = mongoose