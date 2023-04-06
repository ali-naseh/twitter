import React, { createContext, useState } from "react";

const UserContext = createContext({
  users: [],
  loggedInUser: "",
  addUser: (newUser) => {},
  removeUser: (userId) => {},
  logUserIn: (email, password) => {},
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

  const logUserInHandler = (email) => {
    const user = users.find((user) => user.email === email);
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
