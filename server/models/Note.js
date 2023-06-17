import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    done:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

const note = mongoose.model('notes', NotesSchema);
export default note;
