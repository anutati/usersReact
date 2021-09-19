import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  deleteUser,
  makeBookmark,
  status
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Quality key={item._id} {...item} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td><Bookmark id={_id} onBookmark={makeBookmark} statusBookmark={status}/></td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteUser(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
