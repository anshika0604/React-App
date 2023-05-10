import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor has been invoked");
    }
    componentDidMount() {
        console.log("Component Did Mount Successfully");
    }
    componentWillUnmount() {
        console.log("Component Unmounted Successfully");
    }
    render() {
        console.log("Render Method");
        return (
            <div>
                <p>This is class Component</p>
            </div>
        );
    }
}

export default ClassComponent;