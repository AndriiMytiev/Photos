import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import MainPage from './pages/MainPage/MainPage';
import CamerasPage from './pages/CamerasPage/CamerasPage';
import CartPage from './pages/CartPage/CartPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Info />
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<MainPage />
				</Route>
				<Route path="/cameras" exact>
					<CamerasPage/>
				</Route>
				<Route path="/cart">
					<CartPage/>
				</Route>
				<Route path="/confirm">
					<ConfirmationPage/>
				</Route>
				<Route path="/cameras/:id">
					<ProductPage/>
				</Route>
				<Route path="*">
					<Redirect to="/"/>
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
