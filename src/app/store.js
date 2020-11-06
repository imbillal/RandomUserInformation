import { configureStore } from '@reduxjs/toolkit';
import  AuthorsSlice  from '../components/Authors/AuthorsSlice';
import  AuthorSlice  from '../pages/SingleAuthorSlice';
import counterReducer from '../components/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    authorsInfo: AuthorsSlice,
    author: AuthorSlice,
  },
});
