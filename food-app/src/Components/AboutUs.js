// import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor');
    }
    componentDidMount() {
        console.log('parent componentDidMount called');
    }

    render() {
        console.log('Parent Render');
        return (
            <>
                <h1>About</h1>
                <h2>This is developed by Shiv Singh</h2>

                <UserClass
                    name={'Shiv Singh (class)'}
                    location={'Lucknow(class'}
                />
                <UserClass
                    name={'Ashutosh Singh (class)'}
                    location={'Sitapur(class'}
                />
            </>
        );
    }
}

export default AboutUs;
