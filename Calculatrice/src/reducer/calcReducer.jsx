import { useReducer } from "react";

const initialState = {
    n1: '',
    operator: '',
    n2: '',
    result: '',
    error: '',
    count: 0,
    currentInput: 'n1'
};

function calcReducer(state, action) {
    switch (action.type) {
        case 'set_value':
            if (state.currentInput === 'n1') {
                return {
                    ...state,
                    n1: action.payload.value,
                    error: ''
                };
            } else if (state.currentInput === 'n2') {
                return {
                    ...state,
                    n2: action.payload.value,
                    error: ''
                };
            }
            return state;

        case 'set_operator':
            return {
                ...state,
                operator: action.payload,
                currentInput: 'n2'
            };
        case 'calculate_result':
            if (state.n1 !== '' && state.n2 !== '' && state.operator !== '') {
                let result;
                switch (state.operator) {
                    case '+':
                        result = parseInt(state.n1) + parseInt(state.n2);
                        break;
                    case '-':
                        result = parseInt(state.n1) - parseInt(state.n2);
                        break;
                    case '*':
                        result = parseInt(state.n1) * parseInt(state.n2);
                        break;
                    case '/':
                        result = parseInt(state.n1) / parseInt(state.n2);
                        break;
                    default:
                        result = 'Error';
                }
                return {
                    ...state,
                    result: result.toString(),
                    currentInput: ''
                };
            }
            return state;

        case 'reset':
            return initialState;

        case 'set_error':
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}

const useCalcReducer = () => useReducer(calcReducer, initialState);

export default useCalcReducer;