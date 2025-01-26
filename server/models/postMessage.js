import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: null
    }

})
const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage;
