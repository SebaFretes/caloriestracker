export const CalorieTracker = ({ state }) => {

  const calories = state.reduce((total, activity) => {
    return activity.category === '1' ? total + parseInt(activity.calories) : total;
  }, 0);

  const caloriesBurned = state.reduce((total, activity) => {
    return activity.category === '2' ? total + parseInt(activity.calories) : total;
  }, 0);

  const difference = calories - caloriesBurned;

  return (
    <>
      <h2 className="text-4xl text-center text-white font-black">Calories Summary</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <p className="text-white text-center font-bold rounded-full grid grid-cols-1 gap-3">
          <span className="font-black text-6xl text-orange">{calories}</span>
          Consumed
        </p>
        <p className="text-white text-center font-bold rounded-full grid grid-cols-1 gap-3">
          <span className="font-black text-6xl text-orange">{caloriesBurned}</span>
          Burned
        </p>
        <p className="text-white text-center font-bold rounded-full grid grid-cols-1 gap-3">
          <span className="font-black text-6xl text-orange">{difference}</span>
          Difference
        </p>
      </div>
    </>
  )
}
