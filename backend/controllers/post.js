import {
  getPosts,
  getPostsById,
  createPost,
  editPost,
  deletePost
} from '../db/index.js';

const PostController = {
  getAll: async (req, res) => {
    const posts = await getPosts();

    return res.json(posts);

  },
  getById: async (req, res) => {
    const { id } = req.params;
    const post = await getPostsById(id);

    return res.json(post);
  },
  create: async (req, res) => {
    // const post = await createPost({
    //   title: req.body.title,
    //   description: req.body.content,
    const post = await createPost(req.body);

    return res.json(post);
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const post = await editPost(id, req.body);

    return res.json(post);
  },
    delete: async (req, res) => {
      const { id } = req.params;
      const post = await deletePost(id);

      return res.json(post);
    }
};

export default PostController;