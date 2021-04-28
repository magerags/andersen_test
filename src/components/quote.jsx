import React, { Component } from "react";
import From from "./from";
import To from "./to";
import DateInput from "./date_picker";

// eslint-disable-next-line react/prefer-stateless-function
class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };
  }

  DateInput = () => {
    const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  }

  handleClick = () => {
    this.setState({submitted: true });
  }

  render() {
    if (this.state.submitted == true) {
      return (
        <div className="quote-container-submitted">
          <h1>Quote successfully submitted</h1>
          <p>We will get back to you within a few days</p>
          <i className="bi bi-check2-circle" />
        </div>
      );
    }
    return (
      <div className="quote-container">
        <h1>Request a Quote</h1>
        <p>
          Sed id maximus lacus. Ut et ante pulvinar, laoreet velit in, varius
          sem.
        </p>
        <form>
          <From />
          <To />
          <DateInput />
        </form>
        <button type="button" onClick={this.handleClick}>Send Request</button>
      </div>
    );
  }
}

export default Quote;
