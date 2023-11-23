import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext({
  users: [],
  loggedInUser: "",
  addUser: (newUser) => {},
  removeUser: (userId) => {},
  findUser: (email) => {},
  logUserIn: (user) => {},
  logUserOut: () => {},
});

const initialCurrUserValue = () => {
  const currUser = localStorage.getItem("user");
  return currUser ? JSON.parse(currUser) : {};
};
const initialUsersValue = () => {
  const allUsers = localStorage.getItem("users");
  return allUsers ? JSON.parse(allUsers) : [];
};

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState(initialUsersValue);
  const [loggedInUser, setLoggedInUser] = useState(initialCurrUserValue);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUserHandler = (newUser) => {
    setUsers((allUsers) => {
      return allUsers.concat(newUser);
    });
    logUserInHandler(newUser);
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
