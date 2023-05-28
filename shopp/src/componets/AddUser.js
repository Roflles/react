import React from 'react';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: '',
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Імя' onChange={(e) => this.setState({ firstname: e.target.value })}/>
                <input placeholder='Прізвище' onChange={(e) => this.setState({ lastname: e.target.value })}/>
                <input placeholder='Вік' onChange={(e) => this.setState({ age: e.target.value })}/>
                <textarea placeholder='Біографія' onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <label htmlFor='isHappy' >Щясливий?</label>
                <input type='checkbox' id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })}/>
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        age: this.state.age,
                        bio: this.state.bio,
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