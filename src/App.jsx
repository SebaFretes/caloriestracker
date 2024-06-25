import { useEffect, useReducer } from "react";
import { Form } from "./components/Form";
import { formReducer, initialState, restartApp } from "./reducers/form-reducer";
import { ListActivities } from "./components/ListActivities";
import { CalorieTracker } from "./components/CalorieTracker";

export const App = () => {

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state))
  }, [state]);

  const handleRestart = () => {
    dispatch(restartApp());
  }

  return (
    <>
      <div className="py-3 bg-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Calories Tracker</h1>
          <button onClick={handleRestart} className={`bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase cursor-pointer text-white rounded-lg ${state.length === 0 && 'opacity-10'}`}>
            Restart App
          </button>
        </div>
      </div>

      <div className="py-10 px-5 bg-blue-200">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} />
        </div>
      </div>

      <div className="bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker state={state} />
        </div>
      </div>

      {state.length > 0 && (
        <div className="p-10 mx-auto max-w-4xl">
          <ListActivities state={state} dispatch={dispatch} />
        </div>
      )}

      <footer className="mt-4 bg-gray-800">
        <p className="text-center text-2xl font-black uppercase text-white">
          Made by <a href="https://github.com/SebaFretes/" target="_blank"><span className="text-gray-400">Sebastian Fretes</span></a>
        </p>
      </footer>
    </>
  )
};