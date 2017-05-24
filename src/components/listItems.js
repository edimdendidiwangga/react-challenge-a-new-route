import React from 'react';
// import * as semantic from 'semantic-ui-react';
import { BrowserRouter, Route, Link,  } from 'react-router-dom'

class ListItmes extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title : ''

		}
	}

	componentWillMount(){

	}


	render(){

		return(
			<div>
			<table>
				<thead>
					<tr>
						<th>
							No
						</th>
						<th>
							Image
						</th>
						<th>
							Author
						</th>
						<th>
							Title
						</th>
						<th>
							Description
						</th>
						<th>
							Url
						</th>
						<th>
							PublishedAt
						</th>
					</tr>
				</thead>
				<tbody>
				{ this.props.data.map((item, index)=>{
						return (
							<tr key={index}>
								<td>
									{index}
								</td>
								<td>
									<img src={item.urlToImage} />
								</td>
								<td>
									{item.author}
								</td>
								<td >
									<Link to={`/detail/${index}`} >{item.title}</Link>
								</td>
								<td>
									{item.description}
								</td>
								<td>
									{item.url}
								</td>
								<td>
									{item.publishedAt}
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>

			</div>
		)

	}
}

export default ListItmes
