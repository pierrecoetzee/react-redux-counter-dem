import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  history: string[];
}

const initialState: CounterState = {
  value: 0,
  history: ['Initial state: 0'],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(`Incremented to: ${state.value}`);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(`Decremented to: ${state.value}`);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.history.push(`Added ${action.payload}, new value: ${state.value}`);
    },
    reset: (state) => {
      state.value = 0;
      state.history.push('Reset to: 0');
    },
    clearHistory: (state) => {
      state.history = [`Current value: ${state.value}`];
    },
  },
});

export const { increment, decrement, incrementByAmount, reset, clearHistory } = counterSlice.actions;

export default counterSlice.reducer;