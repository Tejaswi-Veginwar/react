import React, {Component} from 'react';

class Formclass extends Component {

    constructor(props){
        super(props);

        this.state = {
            message: '',
            comments: '',
            topic:'React'
        }
    }

    handleChangeUsername = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleChangeComments = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleChangeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }
    onSubmit = () => {
        alert(`${this.state.message} ${this.state.comments} ${this.state.topic}`);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={this.state.message}
                        onChange={this.handleChangeUsername}
                    />
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea value={this.state.comments} onChange={this.handleChangeComments}></textarea>
                </div>

                <div>
                    <label>Select Topic: </label>
                    <select value={this.state.topic} onChange={this.handleChangeTopic}>
                        <option value='react'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }

}

export default Formclass;