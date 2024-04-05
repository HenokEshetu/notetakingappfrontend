import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
		element: <Home />,
		// errorElement: <NotFoundPage />
  },
	{
		path: '/login',
    element: <Login />
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App
