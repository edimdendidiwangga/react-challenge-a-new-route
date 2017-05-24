import React from 'react';

class SingleArticle extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: this.props.getData[this.props.match.params.id]
		}
	}

  render() {
		{ if(!this.state.data) {
			return (
				<p>Loading......</p>
			)
		} else {
			return (
				<div>
				<img src={this.state.data.urlToImage} />
				<p>{this.state.data.title} - {this.state.data.author}</p>
				<p>{this.state.data.description}</p>
				</div>
			)
		}}

  }
}

export default SingleArticle;
