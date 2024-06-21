import { categories } from "../data/categories"


export const ListActivities = ({state}) => {

    const categoryName = (category) => {
        return categories.map(cat => cat.id === parseInt(category) ? cat.name : '');
    }
   
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-slate-600 uppercase">Food and Activities</h2>
        {
            state.map(item => (
                <div key={item.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${parseInt(item.category) === 1 ? 'bg-slate-600' : 'bg-orange-950'}`}>{categoryName(item.category)}</p>
                        <p className="text-2xl font-bold pt-5">{item.activity}</p>
                        <p className="font-black text-4xl text-slate-600">{item.calories} Calories</p>
                        
                    </div>

                    <div>
                        
                    </div>
                    
                </div>
            ))
        }
    </>
  )
}
