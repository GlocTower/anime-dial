import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/demo_action';

class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!this.refs.input.value.trim()) {
                            return;
                        }
                        this.props.addTodo(this.refs.input.value);
                        this.refs.input.value = '';
                    }}
                >
                    <input ref="input"/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (value) => dispatch(addTodo(value))
    };
};

export default connect(null, mapDispatchToProps)(AddTodo);