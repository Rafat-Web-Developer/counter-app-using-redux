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

// action creator
const incrementCounterValue = (payloadValue) => {
	return {
		type: INCREMENT,
		payload: payloadValue
	}
};
const decrementCounterValue = (payloadValue) => {
	return {
		type: DECREMENT,
		payload: payloadValue
	}
};


// reducer
const counterReducer = (state = INITIALSTATE, action) => {
	switch(action.type){
		case (INCREMENT):
		return {
			...state,
			value: state.value + action.payload
		};

		case (DECREMENT):
		return {
			...state,
			value: state.value - action.payload
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
	if(currentCounterStateValue.value <= 1){
		DECREMENT_BTN_ELEMENT.style.display = "none";
	}else{
		DECREMENT_BTN_ELEMENT.style.display = "inline";
	}
}
render();
// subscriber
STORE.subscribe(render);

// dispatch
INCREMENT_BTN_ELEMENT.addEventListener("click", () => {
	STORE.dispatch(incrementCounterValue(5));
});

DECREMENT_BTN_ELEMENT.addEventListener("click", () => {
	STORE.dispatch(decrementCounterValue(2));
});