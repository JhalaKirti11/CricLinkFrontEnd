import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'players',
  initialState: {
    players: [],
    currentPlayer: null,
    isLoading: false,
    error: null
  },
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    updatePlayer: (state, action) => {
      const index = state.players.findIndex(p => p._id === action.payload._id);
      if (index !== -1) {
        state.players[index] = action.payload;
      }
    },
    removePlayer: (state, action) => {
      state.players = state.players.filter(p => p._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearPlayers: (state) => {
      state.players = [];
      state.currentPlayer = null;
      state.error = null;
    }
  }
});

export const { 
  setPlayers, 
  setCurrentPlayer, 
  addPlayer, 
  updatePlayer, 
  removePlayer, 
  setLoading, 
  setError,
  clearPlayers 
} = playerSlice.actions;

export default playerSlice.reducer;
