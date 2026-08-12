import { useState } from "react";

//Componente para selección de idioma.
function IdiomaMenu(){
  //Estado que almacena idioma seleccionado.
  const [Idioma, setIdioma] = useState("es");

  //Función que actualiza el idioma que el usuario selecciona.
  const handleChange = (e) => {
    setIdioma(e.target.value);
    console.log("Idioma seleccionado:", e.target.value);
  };

  //menú desplegable para cambio de idioma.
  return (
    <select value={Idioma} onChange={handleChange}>
      <option value="es">🇨🇴 Español</option>
      <option value="en">🇺🇸 English</option>
      <option value="fr">🇫🇷 Français</option>
    </select>
  );
}

export default IdiomaMenu;