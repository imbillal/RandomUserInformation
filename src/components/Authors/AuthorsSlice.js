import { createSlice } from '@reduxjs/toolkit';

export const AuthorsSlice = createSlice({
  name: 'Authors',
  initialState: {
    authorsInfo: [],
  },
  reducers: {
    getAuthors(state, {payload}){
        state.authorsInfo = payload
    }
  },
});

export const { getAuthors } = AuthorsSlice.actions;

export const fetchAuthors = (data) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(response => {
        response.json().then( authorsList => {
            dispatch(getAuthors(authorsList))
        })
    })
    
};


export default AuthorsSlice.reducer;
