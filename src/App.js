// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
// } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light')
	const [alert, setAlert] = useState(null)

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		})

		setTimeout(() => {
			setAlert(null)
		}, 3000);
	}

	const toggleMode = () => {
		if (mode !== 'dark') {
			setMode('dark')
			document.body.style.backgroundColor = "#27323d"
			document.body.style.color = "white"
			showAlert("Dark Mode Enabled", "success")
			document.title = "TextUtils - Dark Mode"

			// setInterval(() => {
			// 	document.title = "TextUtils is Amazing"
			// }, 2000);

			// setInterval(() => {
			// 	document.title = "Install TextUtils Now"
			// }, 900);
		}
		else {
			setMode('light')
			document.body.style.backgroundColor = "white"
			document.body.style.color = "black"
			showAlert("Light Mode Enabled", "success")
			document.title = "TextUtils - Home"
		}
	}

	const gtoggleMode = () => {
		if (mode !== 'success') {
			setMode('success')
			document.body.style.backgroundColor = "green"
			document.body.style.color = "white"
			showAlert("Success Mode Enabled", "success")
		}
		else {
			setMode('light')
			document.body.style.backgroundColor = "white"
			document.body.style.color = "black"
			showAlert("Light Mode Enabled", "success")
		}
	}
	const rtoggleMode = () => {
		if (mode !== 'danger') {
			setMode('danger')
			document.body.style.backgroundColor = "red"
			document.body.style.color = "white"
			showAlert("Danger Mode Enabled", "success")
		}
		else {
			setMode('light')
			document.body.style.backgroundColor = "white"
			document.body.style.color = "black"
			showAlert("Light Mode Enabled", "success")
		}
	}
	const btoggleMode = () => {
		if (mode !== 'primary') {
			setMode('primary')
			document.body.style.backgroundColor = "blue"
			document.body.style.color = "white"
			showAlert("Primary Mode Enabled", "success")
		}
		else {
			setMode('light')
			document.body.style.backgroundColor = "white"
			document.body.style.color = "black"
			showAlert("Light Mode Enabled", "success")
		}
	}

	return (
		<>
			{/* <Router> */}
				<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} gtoggleMode={gtoggleMode} rtoggleMode={rtoggleMode} btoggleMode={btoggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					{/* <Switch> */}
						{/* <Route exact path="/" component={TextForm}> */}
							<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
						{/* </Route> */}
						{/* <Route exact path="/about" component={About}> */}
							{/* <About /> */}
						{/* </Route> */}
					{/* </Switch> */}
				</div>
			{/* </Router> */}
		</>
	);
}
export default App;
