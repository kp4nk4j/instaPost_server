import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, image, status } = req.body;

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { title, description, image, status, updatedAt: new Date() }, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        await PostMessage.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
