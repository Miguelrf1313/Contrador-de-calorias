import React, { useState } from "react";
import { categories } from "../Data/categori";

export const Form = () => {




  const [activity, setActivity] = useState({
    categori: 1,
    name: "",
    calories:0

  });

  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
          
      setActivity({
        ...activity,
        [e.target.id] : e.target.value
      })
      
      
    }

   


  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grtid-cols-1 gap-3">
        <label htmlFor="Categori">Categoria: </label>
        <select
          id="categori"
          className="border-slate-50-300 p-2 rounded-lg w-full bg-white"
          value={activity.categori}
          onChange={handleChange}
        >
          {categories.map((cate) => (
            <option key={cate.id} value={cate.id}>
              {cate.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grtid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          className="border border-slate-300 p-2 rounded-lg"
          type="text"
          placeholder="Ej. Comida, jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={ handleChange  }
        />
      </div>

      <div className="grid grtid-cols-1 gap-3">
        <label htmlFor="Calories" className="font-bold">
          Actividad:
        </label>
        <input
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          type="number"
          placeholder="Calorias, Ej: 300, 500"
          value={activity.calories}
               onChange={handleChange} 
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full- p-2 uppercase text-white cursor-pointer"
        value="Guardar Comida o Guardar Ejercicio"
        
      />
    </form>
  );
};
