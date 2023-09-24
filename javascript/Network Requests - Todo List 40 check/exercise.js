async function fetchTodos() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const todos = await response.json();
      return todos;
    } catch (error) {
      console.error("Error:", error);
      throw error; 
    }
  }
  
  async function main() {
    try {
      const todos = await fetchTodos();
      console.log("Todos:", todos);
    } catch (error) {
    }
  }
  
  main();
  