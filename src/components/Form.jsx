import { useState } from 'react';
import { categories } from '../data/categories';
// import { uuidv4 }  from 'uuid';

export const Form = ({dispatch}) => {

    const [form, setForm] = useState({
        category: '',
        activity: '',
        calories: ''
    });
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    };

    const formValidation = () => {
        const { category, activity, calories } = form;
        return category.trim() !== '' && activity.trim() !== '' && calories > 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        dispatch({
            type: 'save form',
            payload: form
        });
        setForm({
            category: '',
            activity: '',
            calories: ''
        });
    };

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label className='font-bold'>Category: </label>
                <select className="border border-slate-300 rounded-lg w-full bg-white" id='category' value={form.category} onChange={handleChange}>
                    <option value="" >Choose an option</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
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
                    id='activity'
                    value={form.activity}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label className='font-bold'>Calories: </label>
                <input
                    className='border border-slate-300 p-2 rounded-lg'
                    placeholder='Calories e.g. 500, 750'
                    type='number'
                    id='calories'
                    value={form.calories}
                    onChange={handleChange}
                />
            </div>

            <input type='submit'
                className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10'
                value={form.category === '1' ? 'Save Food' : 'Save Exercise'}
                disabled={!formValidation()}
            />
        </form>
    )
}
