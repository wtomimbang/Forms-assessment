/* To complete the activity, you will need to do the following:
Make a heading in your HTML that says "Add a Todo"
Make a form in your HTML that collects a single input (a new todo)
Make a header below the form that says "Todo List"
When you submit the form, a new todo should pop up in your todo list.
Submitting the form again should add another todo below the previous todo.
Commit all your code into a repository
Push your repository to github
There are a number of ways to implement the functionality described above. I recommend the following:

Use an array to keep track of the todos (Meaning every time the form is submitted, you push the new value onto the array)
Build a template from the array using the map method learned about in the objects assessment.
Display the template on the screen
*/


let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoValue = todoInput.value;
    todos.push(todoValue);
    todoInput.value = '';

    makeTodos();
}
function makeTodos() {
    const todoList = document.getElementById('todoList');
    const todoListHtml = todos.map(todo => `<li>${todo}</li>`).join('');
    todoList.innerHTML = `<ul>${todoListHtml}</ul>`;
}
