import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPostListApi,
  createReviewApi,
  getPostApi,
  delPostApi,
  updatePostApi,
} from "../api/postApi";

export const __createReview = createAsyncThunk(
  "createReview",
  async (payload, thunkAPI) => {
    await createReviewApi(payload);
    thunkAPI.dispatch(createReview(payload));
  }
);

export const __getPostList = createAsyncThunk(
  "getPostList",
  async (_, thunkAPI) => {
    const response = await getPostListApi();
    thunkAPI.dispatch(getPostList(response));
  }
);

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    const response = await getPostApi(payload);
    thunkAPI.dispatch(getPost(response));
  }
);

export const __delPost = createAsyncThunk(
  "delPost",
  async (payload, thunkAPI) => {
    await delPostApi(payload);
  }
);

export const __updatePost = createAsyncThunk(
  "updatePost",
  async (payload, thunkAPI) => {
    await updatePostApi(payload);
    thunkAPI.dispatch(updatePost(payload));
  }
);

const initialState = {
  posts: [],
  post: {},
};

const bookSlice = createSlice({
  name: "createReview",
  initialState,
  reducers: {
    createReview: (state, action) => {
      const id = state.posts[state.posts.length - 1]?.id + 1 || 1;
      //id가 만들어지는 곳에서 state.posts 안했다
      // db 저장과는 별개로 state를 관리한다. 통신은 적을수록 좋기 때문
      state.posts.push({ ...action.payload, id });
    },

    getPostList: (state, action) => {
      state.posts = action.payload;
    },

    getPost: (state, action) => {
      state.post = action.payload;
    },

    delPost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },

    updatePost: (state, action) => {
      console.log(action.payload);
      state.posts = state.posts.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
      state.post = { ...state.post, ...action.payload };
    },
  },
});

export const { createReview, getPostList, getPost, delPost, updatePost } =
  bookSlice.actions;
export default bookSlice.reducer;
