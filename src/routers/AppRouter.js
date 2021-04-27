  
import { Route, Switch } from 'react-router-dom';
import TodoListPage from '../pages/TodoList';

import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={TodoListPage} />
          
        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;