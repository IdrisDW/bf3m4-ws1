// import React from 'react';

// const App = () => {
//    return (
//       <div>
//          Hola Mundo!
//       </div>
//    );
// };

// export default App;


import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
      <Header />
      <Form />
      <TodoList />
        
      </div>
    </div>
  );
}

export default App;
