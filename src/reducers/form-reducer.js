export const initialState = [];

export const saveFormActions = (newForm) => ({
    type: 'save form',
    payload: newForm
});

export const formReducer = (state = initialState, action = {}) => {
    if (action.type === 'save form') {
        return [
            ...state,
            action.payload
        ];
    }
    return state
};