import React ,{useState} from 'react';

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>This is Functional Component</p>
            <br/>
            <button onClick={() => setCount(count+1)}>Click to increment</button>
            <button onClick={() => setCount(count-1)}>Click to decrement</button>
            <h2>{count}</h2>
            <p>My name is {props.name} and my college is {props.college} and age is {props.age}</p>
        </div>
    );
}

export default FunctionalComponent;