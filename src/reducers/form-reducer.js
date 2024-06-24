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

export const restartApp = () => ({
    type: 'restart app'
});

const localStorageActivities = () => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : []
}

export const initialState = localStorageActivities();

export const formReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'save form':
            return [...state, action.payload];
        case 'update form':
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        case 'delete form':
            return state.filter(item => item.id !== action.payload);
        case 'restart app':
            return [];
        default:
            return state;
    }
};