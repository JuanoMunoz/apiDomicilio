import mongoose from "mongoose";
mongoose.connect('').then(()=>{console.log('connected to mongo')}).catch(e=>{console.log('error connecting to mongo')})