import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import ListItems from './components/listItems'
import SingleArticle from './components/singleArticle'
import axios from 'axios'
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: [],
		}
	}

	componentDidMount(){
		let self = this
		axios.get('https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=8f3ef4123b884857b17e951ae16e4142')
	  .then(function (response) {
	    self.setState({
				data : response.data.articles
			})
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

  render() {

	    return (
	      <div className="App">
					<BrowserRouter>
						<div>
							<Route exact path="/" component={()=> <ListItems data={this.state.data} />} />
							<Route path="/detail/:id" component={(props) => <SingleArticle match={props.match} getData={this.state.data} />}  />

						</div>
					</BrowserRouter>
	      </div>
	    );

  }
}

export default App;
