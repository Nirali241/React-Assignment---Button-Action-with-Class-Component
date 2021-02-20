import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			render:false,
    };
    this.handleClick = this.handleClick.bind(this);
	};

	handleClick(){
		this.setState({
			render:true,
		});
	};
	

	renderPara=()=>{
		if(this.state.render){
			return (
				<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
			);
		}
	}

    render() {
    	return(
    		<div id="main">
    
        <button id="click" onClick={this.handleClick}>Click</button>
				{ this.renderPara() }
    		</div>
    	);
    }
}


export default App;
