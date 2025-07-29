import { createSlice } from '@reduxjs/toolkit';

const docsSlice = createSlice({
  name: 'docs',
  initialState: { documents: [] },
  reducers: {
    setDocuments(state, action) {
      state.documents = action.payload;
    }
  }
});

export const { setDocuments } = docsSlice.actions;
export default docsSlice.reducer;
