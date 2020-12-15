import React, { Component } from "react";
// import reducer from "./store/reducers/reducer";
import { connect } from "react-redux";

class AppWithReducer extends Component {
    
    render(){
        return(
            <div className="appwithreducer">
                <h2>Age Increment Decrement with React-Redux</h2>
                <div className="container">
                    <div className="age">Age:<span>{this.props.age}</span></div><br />
                    <button onClick = {this.props.onAgeUp}>Age Up</button>
                    <button onClick={this.props.onAgeDown}>Age Down</button>
                    <hr />
                    <h3>History</h3>
                    {/* <ul className = "historyContainer">
                        {this.props.history.map(el=>(
                            <li className="historyItem">
                               {el.age}
                            </li>
                            ))
                        }
                    </ul> */}
                    <ul className = "historyContainer">
                        {this.props.history.map(el=>(
                            <li className="historyItem" key={el.id} onClick={()=>this.props.onDelHistoryItem(el.id)}>
                               {el.age}
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        age:state.age,
        history:state.history
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        onAgeUp: ()=>dispatch({type:"AGEUP",value:1}),
        onAgeDown: ()=>dispatch({type:"AGEDOWN",value:1}),
        onDelHistoryItem:(id)=>dispatch({type:"DELITEM",key:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWithReducer);