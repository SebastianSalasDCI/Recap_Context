# Recap Context

Code of session 10.12.21

Do not forget to execute npm install when you clone it!


## Small task

The app is missing the logic to be able to see a single To Do in the TodoView component. follow this steps to do the task:
### 1. Add a link in the `ToDo.jsx` file
In the `ToDo.jsx` file, use the Link component from react-router-dom to make the title of the todo a link that will redirect the user to the correct url to see the TodoView. 

You will need to add something like:
```js
<Link className="todoTitle" 
    to={`/category/${item.category}/${item.id}`}
> 
  {item.todo} 
</Link>
```

The `className` is needed to add the style to the link.

### 2. In the `TodoProvider.jsx` add the function to obtain an specific todo
In the `TodoProvider.jsx` create a new function called `getSingleToDo` that will accept the id and category of a To Do and return the To Do that matches both things (id and category). 

After creating the function add it to the `providedData` object.

### 3. Use context and react-router in the `TodoView.jsx` 
Import `useContext` and `TodoContext` to be able to get information from the context in this file. Use destructoring assignment to get the function created in the previous task.

Import `useParams` to obtain both `category` and `todoid` from the URL params. Use the value from category and todoid to pass it as arguments on the function `getSingleToDo` created previously. 

To thes everything is correct, `console.log` the result from the function `getSingleToDo`.

### 4. Create the structure of the `TodoView.jsx`
Next we have to create the structure for the todo. Use the code below as a starting point. This code should be inside the return of the functional component of the `TodoView.jsx`

```js
  <div className='todoViewContainer' >
      <button className='backButton' onClick={/*something*/} >Back to Landing</button>
      <button className='backButton' onClick={/*something*/} >Back to Category</button>
      {todo ? 
        <>
          <h1>{todo.todo}</h1>
          <h2>Date: {todo.date} 
            <Link className='todoCategory' 
              to={`/category/${todo.category}`} 
            >
              {todo.category}
            </Link>
          </h2>
          <h3>Description:</h3>  
          <p> {todo.desc} </p>
        </>
      : 
        null
      }
    </div>
```

Import the `Link` component from react-router-dom.

### 5. Complete the functionality of the back buttons
To the back buttons is missing something in the onClick attribute for it to be able to go back to the other locations. use the hook `useNavigation` from react-router-dom and create the small logic to navigate to the Landing and to the Category of the To Do.

