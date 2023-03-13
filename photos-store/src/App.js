import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CamerasPage from './pages/CamerasPage/CamerasPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Info />
			<NavBar />
			<Switch>
				<Route path="one"></Route>
				<Route path="two"></Route>
				<Route path="three"></Route>
				<Route path="four"></Route>
				<Route path="five"></Route>
				<Route path="six"></Route>
				<Route path="/cameras">
					<CamerasPage/>
				</Route>
				<Route path="eight"></Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
