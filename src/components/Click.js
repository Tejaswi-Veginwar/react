import React from 'react';

class Click extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            msg: 'Hello'
        }
    }

    UpdateClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { count, msg } = this.state;
        return(
            <div>
                <button onClick={this.UpdateClick}>Clicked {count} times</button> {msg}
            </div>
        )
    }
}

export default Click;