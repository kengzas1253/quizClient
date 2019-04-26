import React from 'react';
import { connect } from 'react-redux';
import StudentAction from './redux/student/actions';

const dispatcher = StudentAction.dispatcher;

class Student extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.Student.students.map((student, index) => student && (
                        <div>
                            {student.id} <br />
                            {student.name} <br />
                            {student.surname} <br />
                            {student.major} <br />
                            {student.gpa} <br />
                            <button id={index} onClick={this.handleUpdate}>update</button>
                            <button id={index} onClick={this.handleDelete}>delete</button>
                            <br />
                            <br />
                        </div>
                    ))
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchStudents();
    }

    handleUpdate = (e) => {
        const student = this.props.Input;
        this.props.updateStudent(e.target.id, student);
    }

    handleDelete = (e) => {
        this.props.deleteStudent(e.target.id)
    }

}

export default connect(state => state, dispatcher)(Student);
