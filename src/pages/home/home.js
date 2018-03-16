import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Home extends Component{
    render(){
        const list = [
            1,1,1,1,1,1,
        ];
        return (
            <div onClick={()=>{this.test()}}>`home
                {
                    list.map((it,index)=>{
                        return <div key={index}>it</div>
                    })
                }
            </div>
        )
    }
    test(){
        console.log(this);
    }
}

export default connect( state=>{
    console.log(state);
    return state;
})(Home);