import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Cookies from "js-cookie";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginRegister />,
		// errorElement: <NotFoundPage />
	},
	{
		path: "/home",
		element: Cookies.get("accessToken") ? <Home /> : <LoginRegister />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
