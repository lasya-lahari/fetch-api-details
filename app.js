// App.js
import React from "react";
import "./App.css";
class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://api.forexrateapi.com/v1/latest?api_key=d6e5a5c33d218c419f377952c5bc7b94&base=USD&currencies=EUR,INR,JPY")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>
				</div>
			);

		return (
			<div className="App">
				<h3>Fetch data from an api in react</h3>
				<div className="container">
					{items.map((item) => (
						<div className="item">
							<ol key={item.id}>
								<div>
									<strong>
										{"sucess "}
									</strong>
									{item.sucess},
								</div>
								<div>
									base: {item.base},
								</div>
								<div>
									timestamp: {item.timestamp},
								</div>
			                                        <div>
									rates: {item.rates},
								</div>
							</ol>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
