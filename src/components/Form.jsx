import { categories } from '../data/categories';

export const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label className='font-bold'>Category: </label>
            <select className="border border-slate-300 rounded-lg w-full bg-white">
                {categories.map(cat => (
                    <option key={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className='font-bold'>Activity: </label>
            <input 
            className='border border-slate-300 p-2 rounded-lg'
            placeholder='E.g. Food, Orange juice, Tuna salad, Exercise, Running, Gym' 
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className='font-bold'>Calories: </label>
            <input 
            className='border border-slate-300 p-2 rounded-lg'
            placeholder='Calories e.g. 500, 750'
            type='number' 
            />
        </div>

        <input type='submit'
        className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer' 
        value='Save'/>
    </form>
  )
}
