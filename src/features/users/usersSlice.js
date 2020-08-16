import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 0, name: 'User One' },
  { id: 1, name: 'User Two' },
  { id: 2, name: 'User Three' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer