import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, surname, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id, el)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
