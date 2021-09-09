import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    console.log(id);
    const newArray = users.filter(
      (user) => user._id != id.idOfClickedButton
    );
   setUsers(newArray);
  };

  const renderPhrase = (number) => {
    let word = "";
    if (number === 1 || number % 10 === 1) {
      word = number + " человек тусанет с тобой сегодня";
    } else if (number > 4 && number < 15) {
      word = number + " человек тусанет с тобой сегодня";
    } else if (
      number === 2 ||
      number === 2 ||
      number === 4 ||
      number % 10 === 2 ||
      number % 10 === 3 ||
      number % 10 === 4
    ) {
      word = number + " человека тусанут с тобой сегодня";
    } else if (number ===0){
      word = "Никто с тобой не тусанет"
    }
    return word;
  };

  const getBageclasses = () => {
    let classes = "badge bg-";
    classes += users.length === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <React.Fragment>
      <span style={{ fontSize: "25px" }} className={getBageclasses()}>
        {renderPhrase(users.length)}
      </span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>

              <td>
                {" "}
                {user.qualities.map((quality) => (
                  <span className={"badge m-2 bg-" + quality.color}>
                    {" "}
                    {quality.name}{" "}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  onClick={() => handleDelete({ idOfClickedButton: user._id })}
                  className="badge bg-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Users;
