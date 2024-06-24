export const saveFormActions = (newForm) => ({
    type: 'save form',
    payload: newForm
});

export const updateFormActions = (updatedForm) => ({
    type: 'update form',
    payload: updatedForm
});

export const deleteFormActions = (deletedForm) => ({
    type: 'delete form',
    payload: deletedForm
});

const localStorageActivities = () => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : []
}

export const initialState = localStorageActivities();

export const formReducer = (state = initialState, action = {}) => {
    if (action.type === 'save form') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'update form') {
        return state.map(item => item.id === action.payload.id ? action.payload : item);
    } else if (action.type === 'delete form') {
        return state.filter(item => item.id !== action.payload.id)
    }
    return state;
};