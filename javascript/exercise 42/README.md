# Local Storage

In the `exercise.js` file, we find a `user` object. Write a function that saves the user object in `localStorage` with its 'user' key.

Tips:

- Remember to use the available `JSON methods` (parse, stringify)

const user = {
  id: 1,
  name: "John",
  age: 25,
};


const storeUser = (data) => localStorage.setItem("user", JSON.stringify(data));

storeUser(user);