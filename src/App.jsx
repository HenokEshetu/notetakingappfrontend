import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';

export const router = createBrowserRouter([
  {
    path: '/',
		element: <Home />,
		// errorElement: <NotFoundPage />
  },
	{
		path: '/account',
    element: <LoginRegister />
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App
