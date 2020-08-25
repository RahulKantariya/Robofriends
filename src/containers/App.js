import React from 'react';
import {connect} from 'react-redux';
import CardList from '../component/CardList';
import Searchbox from '../component/Searchbox';
import Scroll from '../component/Scroll';

import {setSearhField,requestrobots} from '../actions';


const mapStateToPrps=state=>{
	return{
		searchField:state.searchrobots.searchField,
		isPending:state.requestrobots.isPending,
		robots:state.requestrobots.robots,
		error:state.requestrobots.error

		};
}

const mapDispatchToProps=(dispatch)=>{
	return{
		onsearchchange:(event)=>{dispatch(setSearhField(event.target.value))},
		onrequestrobots:()=>dispatch(requestrobots())
	}
}


class App extends React.Component{
	
	componentDidMount(){
		
		this.props.onrequestrobots();
	}

	

	render(){
		const {searchField ,onsearchchange,robots,isPending}=this.props; 
		const filterrobot = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if (isPending){
			return <h1> Loading </h1>
 		}
 		else{
 		return (
			<div className=" tc ">
				<h1 className="f1">RoboFriends</h1>
				<Searchbox searchchange={onsearchchange}/>
				<Scroll>
				<CardList robots={filterrobot}/>
				</Scroll>
			</div>
		);
 		}
	
  	}	
}

export default connect(mapStateToPrps,mapDispatchToProps)(App);