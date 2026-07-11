import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    currentTeam: null,
    isLoading: false,
    error: null
  },
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
    addTeam: (state, action) => {
      state.teams.push(action.payload);
    },
    updateTeam: (state, action) => {
      const index = state.teams.findIndex(team => team._id === action.payload._id);
      if (index !== -1) {
        state.teams[index] = action.payload;
      }
    },
    removeTeam: (state, action) => {
      state.teams = state.teams.filter(team => team._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearTeams: (state) => {
      state.teams = [];
      state.currentTeam = null;
      state.error = null;
    }
  }
});

export const { 
  setTeams, 
  setCurrentTeam, 
  addTeam, 
  updateTeam, 
  removeTeam, 
  setLoading, 
  setError,
  clearTeams 
} = teamSlice.actions;

export default teamSlice.reducer;
