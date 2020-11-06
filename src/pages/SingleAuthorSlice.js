import { createSlice } from '@reduxjs/toolkit';

export const AuthorSlice = createSlice({
  name: 'Author',
  initialState: {
    authorInfo: null,
    comments: null,
    posts: null,
  },
  reducers: {
    getAuthor(state, {payload}){
        state.authorInfo = payload
    },
    getPost(state, {payload}){
      state.posts = payload
    },
    getComments(state, {payload}){
      state.comments = payload
    },
    deletePost(state, {payload}){
      if(state.posts.length){
        state.posts = state.posts.filter( post => post.id !== payload)
      }else{
        state.posts = null
      }
    },
    setPost(state, {payload}){
      state.posts = [payload, ...state.posts]
    }
  },
});

export const { getAuthor, getPost, getComments, deletePost, setPost } = AuthorSlice.actions;

export const fetchAuthor = (data) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(response => {
        response.json().then( authorsList => {
            dispatch(getAuthor(authorsList))
        })
    })
};
export const fetchPosts = (data) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(response => {
        response.json().then( post => {
            dispatch(getPost(post))
        })
    })
};

export const fetchComments = (data) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/${data}`, {method: 'get'})
    .then(response => {
        response.json().then( comments => {
            dispatch(getComments(comments))
        })
    })
};

export const deletePostAsync = (data) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${data}`, {method: 'delete'})
  .then(response => {
    dispatch(deletePost(data))
  })
}

export const dataPostAsync = (data) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'post',
      body: JSON.stringify(data) 
  })
  .then(response => {
    dispatch(setPost(data))
  })
}


export default AuthorSlice.reducer;
