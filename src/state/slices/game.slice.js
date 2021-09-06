import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGame = createAsyncThunk(
	'api/getgame',
	async (payload) => {
    console.log(payload.id);
		const response = await fetch(`http://localhost:4000/api/game/${payload.id}`, {
		// const response = await fetch(`http://localhost:4000/api/getgame`, {
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify({ id: payload.id }),
		});
    if (response.ok) {
      const game = await response.json();
      return game;
		}
	}
);

export const createCode = createAsyncThunk(
	'api/game/code',
	async (payload) => {
		const response = await fetch(`http://localhost:4000/api/game/code`, {
		// const response = await fetch(`https://anaalamed-tic-tac-toe-server.herokuapp.com/api/game/code`, {
      method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ playerName: payload.name }),
		});
    if (response.ok) {
      const game = await response.json();
      return game;
		}
	}
);

export const startGameA = createAsyncThunk(
	'api/game/start',
	async (payload) => {
    console.log(payload);
		const response = await fetch(`http://localhost:4000/api/game/start`, {
		// const response = await fetch(`https://anaalamed-tic-tac-toe-server.herokuapp.com/api/game/start`, {
      method: "POST",
			headers: {
				'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        user: payload.id 
			},
		});
    if (response.ok) {
      const game = await response.json();
      return game;
		}
	}
);

export const startGameB = createAsyncThunk(
	'api/game/startB',
	async (payload) => {
    console.log(payload);
		const response = await fetch(`http://localhost:4000/api/game/start`, {
		// const response = await fetch(`https://anaalamed-tic-tac-toe-server.herokuapp.com/api/game/start`, {
      method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ playerName: payload.playerName, code: payload.code }),
		});
    if (response.ok) {
      const game = await response.json();
      console.log(game);
      return game;
		}
	}
);

export const move = createAsyncThunk(
	'api/game/move',
	async (payload) => {
    console.log( payload);
		const response = await fetch(`http://localhost:4000/api/game/move`, {
		// const response = await fetch(`https://anaalamed-tic-tac-toe-server.herokuapp.com/api/game/start`, {
      method: "PUT",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ playerId: payload.id, code: payload.code, move: payload.move }),
		});
    if (response.ok) {
      const game = await response.json();
      console.log(game);
      return game;
		}
	}
);

export const status = createAsyncThunk(
	'api/game/status',
	async (payload) => {
    console.log( payload );
    const response = await fetch(`http://localhost:4000/api/game/${payload.gameId}/status`, {
      method: "GET",
			headers: {
				'Content-Type': 'application/json',
        player: payload.playerId 
			},
		});
    if (response.ok) {
      const res = await response.json();
      console.log(res);
      return res;
		}
	}
);


const game_slice = createSlice({
  name: "game",
  initialState: {
    // code: '',
    // board: [],
    // playerA: [],
    // playerB: [],
    // xSign: null,
    // currentTurn: null
    game: {},
    me: {}
  },
  reducers: {
    // setMe: (state, action) => {
    //   state.me = action.payload;
    // }
  },
  extraReducers: {
    [getGame.fulfilled]: (state, action) => {
      state.game = (action.payload);
    },
    [createCode.fulfilled]: (state, action) => {
      state.game = (action.payload);
    },
    [startGameA.fulfilled]: (state, action) => {
      state.game = (action.payload);
      state.me = action.payload.playerA;
      state.me['player'] = "A";
    },
    [startGameB.fulfilled]: (state, action) => {
      state.game = (action.payload);
      state.me = action.payload.playerB;
      state.me['player'] = "B";
    },
    [move.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.game = (action.payload);
    },
    [status.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.message === 'win') {
        console.log('booom');
        state.me.wins = state.me.wins+1;
        alert(`${state.me.name} win!`);
      }

    }
}});

export default game_slice.reducer;
// export const { setMe } = game.slicelice.actions;



