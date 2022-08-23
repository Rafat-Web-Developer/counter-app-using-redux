// get html elements using id
const COUNTER_ELEMENT = document.getElementById("counterResult");
const INCREMENT_BTN_ELEMENT = document.getElementById("incrementBtn");
const DECREMENT_BTN_ELEMENT = document.getElementById("decrementBtn");


// action initialization
const INCREMENT = "increment";
const DECREMENT = "decrement";

// inital state
const INITIALSTATE = {
	value: 0
};




// reducer
const counterReducer = (state = INITIALSTATE, action) => {
	switch(action.type){
		case (INCREMENT):
		return {
			...state,
			value: state.value + 1
		};

		case (DECREMENT):
		return {
			...state,
			value: state.value - 1
		};

		default:
		return state;
	}
};

// create store
const STORE = Redux.createStore(counterReducer);

const render = () => {
	const currentCounterStateValue = STORE.getState();
	COUNTER_ELEMENT.innerText = currentCounterStateValue.value.toString();
}
render();
// subscriber
STORE.subscribe(render);

// dispatch
INCREMENT_BTN_ELEMENT.addEventListener("click", () => {
	STORE.dispatch({
		type: INCREMENT
	});
});

DECREMENT_BTN_ELEMENT.addEventListener("click", () => {
	STORE.dispatch({
		type: DECREMENT
	});
});