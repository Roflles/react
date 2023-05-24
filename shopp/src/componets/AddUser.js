import React from 'react';

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: '1',
            isHappy: true
        }
    }
    render() {
        return (
            <form>
                <input placeholder='Імя' onChange={(e) => this.setState({ firstname: e.target.value })}/>
                <input placeholder='Прізвище' onChange={(e) => this.setState({ lastname: e.target.value })}/>
                <input placeholder='Вік' onChange={(e) => this.setState({ age: e.target.value })}/>
                <textarea placeholder='Біографія' onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <label htmlFor='isHappy' >Щясливий?</label>
                <input type='checkbox' id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })}/>
                <button type='button' onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    age: this.state.age,
                    bio: this.state.bio,
                    isHappy: this.state.isHappy,
                })}>Додати</button>
            </form>
        )
    }
}

export default AddUser