import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				Home
			</div>
		);
	};
}

export default class extends Component {
	render() {
		return (
      <HashRouter>
        <div>
          <Route exact path="/" render={() => <div>Index</div>} />
          <Route exact path="/home" component={Home} />
        </div>
      </HashRouter>
		);
	};
}
