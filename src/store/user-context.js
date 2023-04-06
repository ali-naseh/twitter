import React, { createContext, useState } from "react";

const UserContext = createContext({
  users: [],
  addUser: (newUser) => {},
  removeUser: (userId) => {},
  isLoggedIn: (userId) => {},
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((allUsers) => {
      return allUsers.concat(newUser);
    });
  };

  const removeUserHandler = (userId) => {
    setUsers((allUsers) => {
      return allUsers.filter((user) => userId !== user.id);
    });
  };

  const userIsLoggedInHandler = (userId) => {
    return users.some((user) => user.id === userId);
  };

  const context = {
    user: users,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    isLoggedIn: userIsLoggedInHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
