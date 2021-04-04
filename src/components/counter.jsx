import React, { Component } from 'react';

class  Counter extends Component {
    state = { 
        count:0,
        min:4,
        name:{
            firstName:"sai",
            lastName:"manish"
        },
        list_items: ['Bread','Butter','Jam','Milky bar']
    }
    x = 10;
    // constructor(){
    //     super();
    //     this.handleClick = this.handleClick.bind(this);
    // }
    render() { 
        const { firstName,lastName } = this.state.name;
        const { item } = this.props;
        console.log(item)
        return ( 
            <div className="d-flex flex-row">
                <span className = {this.changeColour()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => this.increaseClick()}  className = "btn btn-success m-2">+</button>
                <button onClick={() => this.decreaseClick()}  className = "btn btn-danger m-2">-</button>
                <p className="my-auto mx-2">{item.name}</p>
                <p className="my-auto mx-2">{'['+item.cost*this.state.count+']'}</p>
                {/* {this.state.list_items.length <= 0 && <p>There are no items to display</p>}
                {this.renderGroceries()} */}
            </div>    
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    changeColour(){
        let classes = "badge my-auto badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    renderGroceries(){
        /*
        let groceries = this.state.list_items.length > 0 ? <ul>
        { this.state.list_items.map((item) => {
            return <li key={item}>{item}</li>
        }) }
        </ul> : <p>There are no items to display</p>;
        return groceries;
        */
       return (
            <ul>
            { 
                this.state.list_items.map((item) => {
                    return <li key={item}>{item}</li>
                })
            }
            </ul> 
       );
    }
    increaseClick(){
        console.log('Button Clicked');
        console.log(this);
        this.setState({count:this.state.count+1});
    }
    decreaseClick(){
        console.log('Button Clicked');
        console.log(this);
        if(this.state.count > 0){
            this.setState({count:this.state.count-1});
        }
    }
    calculateTotal(){

    }
}
 
export default Counter;