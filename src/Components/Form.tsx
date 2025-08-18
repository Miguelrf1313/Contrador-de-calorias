import React, { useState, type Dispatch } from "react";
import { categories } from "../Data/categori";
import type { Activity as Actividad } from "./Types";
import type { activityActios } from "../Reducers/Activity-reducer";

type FormProps = {
  dispatch: Dispatch<activityActios>;
};

export const Form = ({ dispatch }: FormProps) => {
  const [activity, setActivity] = useState<Actividad>({
    categori: 1,
    name: "",
    calories: 0,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["categori", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isSutmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    console.log(name.trim() !== "");
    return name.trim() !== "" && calories > 0;
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={isSutmit}
    >
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
          onChange={handleChange}
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
        className="bg-gray-800 hover:bg-gray-900 w-full- p-2 uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.categori == 1 ? "Guardar comida" : "Guardar ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
};
