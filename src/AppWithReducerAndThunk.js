import React, { Component } from "react";
import reducer from "./store/reducers/reducer";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";
import logo from "./logo.svg";

class AppWithReducer extends Component {
    
    render(){
        return(
            <div className="appwithreducer">
                <h2>Age Increment Decrement with React-Redux(Reducer and Thunk)</h2>
                <div className="container">
                    <div className="age">Age:<span>{this.props.age}</span></div><br />
                    <button onClick = {this.props.onAgeUp}>Age Up</button>
                    <button onClick={this.props.onAgeDown}>Age Down</button>
                    {this.props.loading && <img src={logo} className="app-logo"/>}
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
        history:state.history,
        loading:state.loading
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        onAgeUp: ()=>dispatch(actionCreator.ageUp(1)),
        onAgeDown: ()=>dispatch(actionCreator.ageDown(1)),
        onDelHistoryItem:(id)=>dispatch({type:"DELITEM",key:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWithReducer);