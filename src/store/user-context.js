import React, { createContext, useState } from "react";

const UserContext = createContext({
  users: [],
  loggedInUser: "",
  addUser: (newUser) => {},
  removeUser: (userId) => {},
  findUser: (email) => {},
  logUserIn: (user) => {},
  logUserOut: () => {},
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

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

  const findUserHandler = (email) => {
    return users.find((user) => user.email === email);
  };

  const logUserInHandler = (user) => {
    setLoggedInUser(user);
  };

  const logUserOutHandler = () => {
    setLoggedInUser("");
  };

  const context = {
    users: users,
    loggedInUser: loggedInUser,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
    findUser: findUserHandler,
    logUserIn: logUserInHandler,
    logUserOut: logUserOutHandler,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
