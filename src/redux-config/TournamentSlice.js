import { createSlice } from '@reduxjs/toolkit';

const tournamentSlice = createSlice({
  name: 'tournaments',
  initialState: {
    tournaments: [],
    currentTournament: null,
    upcomingTournaments: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setTournaments: (state, action) => {
      state.tournaments = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUpcomingTournaments: (state, action) => {
      state.upcomingTournaments = action.payload;
    },
    setCurrentTournament: (state, action) => {
      state.currentTournament = action.payload;
    },
    addTournament: (state, action) => {
      state.tournaments.push(action.payload);
    },
    updateTournament: (state, action) => {
      const index = state.tournaments.findIndex(t => t._id === action.payload._id);
      if (index !== -1) {
        state.tournaments[index] = action.payload;
      }
    },
    removeTournament: (state, action) => {
      state.tournaments = state.tournaments.filter(t => t._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearTournaments: (state) => {
      state.tournaments = [];
      state.currentTournament = null;
      state.upcomingTournaments = [];
      state.error = null;
    }
  }
});

export const { 
  setTournaments, 
  setUpcomingTournaments,
  setCurrentTournament, 
  addTournament, 
  updateTournament, 
  removeTournament, 
  setLoading, 
  setError,
  clearTournaments 
} = tournamentSlice.actions;

export default tournamentSlice.reducer;
