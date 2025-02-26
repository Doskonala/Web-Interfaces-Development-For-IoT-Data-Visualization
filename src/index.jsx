import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function ClickButton(){
	function showMessage(){
		alert("Hello World");
	}
	return <button onClick={showMessage}>Click me</button>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<ClickButton/>
	</React.StrictMode>
)