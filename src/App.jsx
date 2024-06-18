import { Form } from "./components/Form"

export const App = () => {

  return (
    <>
      <div className="py-3 bg-blue-300">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Calories Tracker</h1>
        </div>
      </div>

      <div className="py-20 px-5 bg-blue-200">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </div>

    </>
  )
}