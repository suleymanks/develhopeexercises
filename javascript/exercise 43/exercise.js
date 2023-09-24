const user = {
  id: 1,
  name: "John",
  age: 25,
};


const storeUser = (data) => localStorage.setItem("user", JSON.stringify(data));

storeUser(user);

const recoverUser = () => JSON.parse(localStorage.getItem("user"));

recoverUser();