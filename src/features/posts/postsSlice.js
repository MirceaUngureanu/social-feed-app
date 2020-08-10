import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'First Post', content: 'Hello first!'},
  { id: '2', title: 'Second Post', content: 'Hello second!'}
]

const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlide.reducer