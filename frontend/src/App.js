import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
// components
import Login from "./components/accounts/Login";
import Signup from "./components/accounts/Signup";
import Header from "./components/Header";

// css
import "./style/app.css";

// react router
const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login></Login>,
	},
	{
		path: "/signup",
		element: <Signup></Signup>,
	},
]);

function App() {
	return (
		<div className="App">
			{/* <Header></Header> */}

			<RouterProvider router={router} />
		</div>
	);
}

export default App;
