import Post from '../models/post.js';

export const getPosts = async () => {
    const posts = await Post.find();

    return posts;
};

export const getPostsById = async (id) => {
    const post = await Post.findById(id);

    return post;
};

export const createPost = async (post) => {
    const newPost = await new Post({
        title: post.title,
        description: post.description,
    }).save();

    return newPost;
};

export const editPost = async (id, post) => {
    const updatedPost = await Post.findOneAndUpdate({ _id: id }, post, { new: true });

    return updatedPost;
};

export const deletePost = async (id) => {
    const post = await Post.findByIdAndDelete(id);

    return post;
};