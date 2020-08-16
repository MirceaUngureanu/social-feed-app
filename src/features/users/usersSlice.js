import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Author One' },
  { id: '1', name: 'Author Two' },
  { id: '2', name: 'Author Three' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer