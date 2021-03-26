import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IUctmK7ctUI9X4l1uUoYKVjKrctAF0z8cVW1CWOB1wf778antg1wEBLZaEIS45NmFTpr08XGxrFQxpIwCgAn5eM00DJ6ZGrji');

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// will only run once when app component load

		auth.onAuthStateChanged(authUser => {
			console.log("the user is >>>", authUser)
			if(authUser){
				// the user just loged in / the user was loged in
				dispatch({
					type:'SET_USER',
					user: authUser
				})
			}else{
				// the user is logged out
				dispatch({
					type:'SET_USER',
					user: null
				})
			}

		})

	}, [])

  	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					{/* This is the Deult route  */}
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
