import React ,{ useState } from 'react';

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(0);
    const [ changeName, setChangeName ] = useState("");
    const {name, college, age, setName} = props;
    return (
        <div>
            <p>This is Functional Component</p>
            <br/>
            <button onClick={() => setCount(count+1)}>Click to increment</button>
            <button onClick={() => setCount(count-1)}>Click to decrement</button>
            <h2>{count}</h2>
            <p>My name is {name} and my college is {college} and age is {age}</p>
            <input onChange = {(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)} > Click to change name </button>
        </div>
    );
}

export default FunctionalComponent;