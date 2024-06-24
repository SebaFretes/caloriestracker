export const initialState = [];

export const saveFormActions = (newForm) => ({
    type: 'save form',
    payload: newForm
});

export const updateFormActions = (updatedForm) => ({
    type: 'update form',
    payload: updatedForm
});

export const formReducer = (state = initialState, action = {}) => {
    if (action.type === 'save form') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'update form') {
        return state.map(item => item.id === action.payload.id ? action.payload : item);
    }
    return state;
};