import React, { Component } from 'react';
import DatePicker from 'react-datepicker';


class DateInput extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: null };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    console.log(date);
  }

  render() {
    return (
      <div className="input-container">
        <i className="bi bi-calendar4" />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date"
        />
      </div>
    );
  }
}

export default DateInput;
