import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				리액트 스터디 2조 : 박유진, 장원미, 신균욱, 최원석입니다.<br /><br />deploy test 젠장
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
		</header>
		</div>
	);
}

export default App;
