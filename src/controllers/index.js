'use strict';

let responses = require('../responses');
let Post = require('../models');

module.exports = {
  index: async(req,res)=>{
    try{
      responses.success('Welcome to Api',res);
    }catch (err){
      responses.error(String(err), res);
    }
  },
  getpost: async (req, res) => {
    try {
      const getdata = await Post.find();
      responses.success(getdata, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  },
  getonepost: async (req, res) => {
    try {
      const getonedata = await Post.findById(req.params.id);
      responses.success(getonedata, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  },
  addpost: async (req, res) => {

    const post = new Post(req.body);

    try {
      const insert = await post.save();
      responses.success(insert, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  },
  updatepost: async (req, res) => {
    try {
      const update = await Post.updateOne({ _id: req.params.id },
        { $set: req.body }
      );
      responses.success(update, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  },
  deletepost: async (req, res) => {
    try {
      const remove = await Post.findByIdAndDelete({ _id: req.params.id });
      responses.success(remove, res);
    } catch (err) {
      responses.error(String(err), res);
    }
  }
};
