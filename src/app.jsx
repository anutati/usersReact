import React, { useState } from "react";
import Users from "./components/users";
import Searchstatus from "./components/searchStatus";

import api from "./API";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((item) => item._id != userId));
  };

  const hadnleBookmark = (userId) => {
    setUsers(
      users.map((user) => {
        if (user._id === userId) {
          user.status = !user.status;
          console.log("userstatus=", user.status, user.name)
        }
        return user;
      })
    );
  };
  return (
    <div>
      <Searchstatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onBookmark={hadnleBookmark}
        status={users.status}
      />
    </div>
  );
}
export default App;
