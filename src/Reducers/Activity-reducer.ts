import type { Activity } from "../Components/Types";
export type activityActios = {
  type: "save-activity", payload : { newActivity : Activity }      };

//El type es lo que describe lo que estamos haciendo.
//Cuando hayamos enviado nuestro formulario le vamos a decir al "reducer" (Ejecuta el type de save-Activity)
//Cuando ejecutamos el (type) vamos a mandar el (payload) (carga util), el cual va a ser la informacion que le deberemos mandar a nuestro state

export type activityState = {
  activities: Activity[];
};

export const initialState: activityState = {
  activities: [],
};

export const activityReducer = (
  state: activityState = initialState,
  action: activityActios
) => {


if (action.type === 'save-activity') {
    // Este codigo maneja la logica para actualizar el State
    // Una ves que mandemos a llamar el type correspondiente este va a validar el "IF" y nos va a ejecutar el cambio a nuestro STate
    console.log('Ejecutando desde el type Save-Activity')
}
    return state
};


