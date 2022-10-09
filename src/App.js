import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'
import About from './components/About/About';
import Activity from './components/Activity/Activity';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tShirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/activity',
          element: <Activity></Activity>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
