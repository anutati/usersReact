import React from "react";
import User from "./user";

const Users = ({ users, onDelete, onBookmark, status }) => {
  return (
    <React.Fragment>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col">Удалить</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                {...user}
                makeBookmark={onBookmark}
                deleteUser={onDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default Users;
