import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
            count2: 1,
        };
        console.log(this.props.name + 'Child Constructor');
    }
    componentDidMount() {
        console.log(this.props.name + 'Child componentDidMount called');
    }
    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        console.log('Child Render');
        return (
            <>
                <div
                    className="user-card"
                    style={{
                        border: '1px solid #ccc',
                    }}
                >
                    <h1>Count = {count}</h1>
                    <button
                        onClick={() => {
                            // NEVER UPDATE STATE VARIABLE DIRECTLY
                            // count = count + 1;
                            this.setState({
                                count: this.state.count + 1,
                            });
                        }}
                    >
                        Count Increase
                    </button>
                    <button
                        onClick={() => {
                            // NEVER UPDATE STATE VARIABLE DIRECTLY
                            // count = count + 1;
                            this.setState({
                                count: 0,
                            });
                        }}
                    >
                        Reset
                    </button>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <p>Contact: shivsinghcse@gmail.com</p>
                </div>
            </>
        );
    }
}

export default UserClass;
