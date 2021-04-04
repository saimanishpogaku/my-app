import React from 'react';
import Counter from './counter';

class Counters extends Counter {
    state = {
        counters:[
            {id:1,value:0,name:'Butter',cost:20},
            {id:2,value:0,name:'Milk',cost:25},
            {id:3,value:0,name:'Bread',cost:25},
            {id:4,value:0,name:'Jam',cost:100}
        ]
    }
    render(){
    
        return (
            <div>
                <div>
                    <h1>Online Grocery Store</h1>
                </div>
                <div className="d-flex flex-column">
                    {this.state.counters.map((item) => <Counter key={item.id} item={item} />)}
                </div>
                <button  className = "btn btn-success m-2">Total:</button>
                <button  className = "btn btn-success m-2">checkout</button>
            </div>
        )
    }
}

export default Counters
