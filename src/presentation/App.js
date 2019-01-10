import React, { Component, Fragment } from 'react';
import Header from './Header';
import Intro from './Intro';
import Coachmark from '../container/Coachmark';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Coachmark />
				<Header />
				<Intro />
			</Fragment>
		);
	}
}

export default App;
