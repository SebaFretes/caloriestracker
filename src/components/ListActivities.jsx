import { useState } from 'react';
import { categories } from '../data/categories';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Form } from './Form';

export const ListActivities = ({ state, dispatch }) => {
    const [activityToEdit, setActivityToEdit] = useState(null);

    const categoryName = (category) => {
        const categoryObj = categories.find(cat => cat.id === parseInt(category));
        return categoryObj ? categoryObj.name : '';
    };

    const setActivity = (item) => {
        setActivityToEdit(item);
    };

    const clearEdit = () => {
        setActivityToEdit(null);
    };

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-slate-600 uppercase">Food and Activities</h2>
            {state.map(item => (
                <div key={item.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${parseInt(item.category) === 1 ? 'bg-slate-600' : 'bg-orange-950'}`}>{categoryName(item.category)}</p>
                        <p className="text-2xl font-bold pt-5">{item.activity}</p>
                        <p className="font-black text-4xl text-slate-600">{item.calories} Calories</p>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <button onClick={() => setActivity(item)}>
                            <PencilSquareIcon className='h-8 w-8 text-gray-800' />
                        </button>
                    </div>
                </div>
            ))}

            {activityToEdit && (
                <div className="p-10 mx-auto max-w-4xl">
                    <Form dispatch={dispatch} activityToEdit={activityToEdit} clearEdit={clearEdit} />
                </div>
            )}
        </>
    );
};