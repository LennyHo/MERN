import PostMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        res.status(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const createdPost = async(req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};