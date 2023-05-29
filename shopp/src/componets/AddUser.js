import React from 'react';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            age: '',
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Імя' onChange={(e) => this.setState({ first_name: e.target.value })}/>
                <input placeholder='Прізвище' onChange={(e) => this.setState({ last_name: e.target.value })}/>
                <input placeholder='Вік' onChange={(e) => this.setState({ age: e.target.value })}/>
                <textarea placeholder='email' onChange={(e) => this.setState({ email: e.target.value })}></textarea>
                <label htmlFor='isHappy' >Щясливий?</label>
                <input type='checkbox' id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })}/>
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        age: this.state.age,
                        email: this.state.email,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Додати</button>
            </form>
        )
    }
}

export default AddUser