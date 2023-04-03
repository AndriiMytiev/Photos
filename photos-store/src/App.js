import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CamerasPage from './pages/CamerasPage/CamerasPage';
import CartPage from './pages/CartPage/CartPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Info />
			<NavBar />
			<Switch>
				<Route path="/cameras">
					<CamerasPage/>
				</Route>
				<Route path="/cart">
					<CartPage/>
				</Route>
				<Route path="/confirm">
					<ConfirmationPage/>
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
