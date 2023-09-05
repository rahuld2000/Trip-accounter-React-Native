import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './slice/user'
export default configureStore({
  reducer: {
    user
  },
  middleware: (getDefaultMiddleware)=>
  getDefaultMiddleware({
      serializableCheck: false
  })
 
})