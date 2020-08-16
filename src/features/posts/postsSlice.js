import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const defaultReactions = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0
}

const initialState = [
  {
    id: '1',
    title: 'First Post',
    content: 'Hello first!',
    user: '0',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { ...defaultReactions }
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'Hello second!',
    user: '1',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: { ...defaultReactions }
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)

      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: { ...defaultReactions }
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { reactionAdded, postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer