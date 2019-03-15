import React from 'react';
import {Grid, Cell, Table, TableHeader} from 'react-mdl';
import '../App.css';

class StudentReport extends React.Component {
    constructor() {
        super();
        this.state = {
            studentIds: [],
            students: [],
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        fetch("/students")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    studentIds: data,
                    students: data,
                });
            });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const id = this.refs.studentId.value;
        if(id == "All") {
            fetch("/students")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        studentIds: data,
                        students: data,
                    });
                });
        }
        else {
            fetch("/studentById/" + id)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        students: data,
                    });
                });
        }
    }

    render() {
        return (
            <div>

                {/*mdl-card mdl-shadow--6dp*/}
                <div className="" style={{width: '100%', border: '1pt solid #606060', borderRadius: '5px 5px 5px 5px'}}>
                    <div className="mdl-card__title" style={{color: '#ffffff', background: 'linear-gradient(to right, #606060, #ffffff)'}}>
                        <h4 className="mdl-card__title-text" style={{fontSize: '14px'}}>Student Report</h4>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <form action="#" onSubmit={this.handleFormSubmit}>
                            <div className="mdl-textfield mdl-js-textfield">
                                <label style={{paddingRight: "25px", fontSize: '14px'}}>Student ID:</label>
                                <select ref="studentId" style={{width: "50px"}}>
                                    <option value="All">All</option>
                                {this.state.studentIds.map(studentId => (
                                <option key={studentId.id} value={studentId.id}>{studentId.id}</option>
                                ))}

                                </select>
                                {/*<input className="mdl-textfield__input" type="text" id="username"/>*/}
                                {/*<label className="mdl-textfield__label" htmlFor="username">Username</label>*/}
                            </div>
                            <br/>
                            {/*<div className="mdl-textfield mdl-js-textfield">*/}
                                {/*<input className="mdl-textfield__input" type="password" id="userpass"/>*/}
                                {/*<label className="mdl-textfield__label" htmlFor="userpass">Password</label>*/}
                            {/*</div>*/}
                            <div className="mdl-card__actions mdl-card--border">
                                <button style={{fontSize: '14px'}}
                                    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <Grid style={{paddingLeft: '0px'}}>
                    {/*<Cell col={4}></Cell>*/}
                    {/*<Cell col={4}>*/}
                        <Table style={{borderRadius: '5px 5px 5px 5px'}}
                            sortable
                            shadow={0}
                            rows={
                                this.state.students.map(student => (
                                {studentId: student.id, firstName: student.firstName, lastName: student.lastName, email: student.email}
                                ))
                            }
                        >
                            <TableHeader style={{borderRadius: '5px 5px 5px 5px'}}
                                numeric
                                name="studentId"
                                tooltip="Student ID"
                            >
                                Student ID
                            </TableHeader>
                            <TableHeader
                                name="firstName"
                                // sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                                tooltip="Student First Name"
                            >
                                First Name
                            </TableHeader>
                            <TableHeader
                                name="lastName"
                                // sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                                tooltip="Student Last Name"
                            >
                                Last Name
                            </TableHeader>
                            <TableHeader
                                name="email"
                                // sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                                tooltip="Student Email"
                            >
                                Email
                            </TableHeader>
                        </Table>
                    {/*</Cell>*/}
                    {/*<Cell col={4}></Cell>*/}
                </Grid>
            </div>
        )
    }
}

export default StudentReport;