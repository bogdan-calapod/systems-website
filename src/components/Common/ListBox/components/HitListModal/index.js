/**
 * Course hit list modal
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "rodal";

import Main from "./components/Main";

const propTypes = {
  data: PropTypes.array,
  announcements: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func
};

const defaultProps = {
  visible: false,
  announcements: [],
  onClose: (_) => {},
  data: []
};

function unique(list) {
  return list.filter((x, i) => list.indexOf(x) === i);
}

class HitListModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "2020"
    };
  }

  componentDidMount() {
    let years = this.years;

    years.forEach((year) => {
      if (window.location.href.includes("/" + year)) {
        this.setState({ ...this.state, year });
      }
    });
  }

  setYear = (year) => this.setState({ ...this.state, year: year.toString() });

  get data() {
    const { year } = this.state;
    const { data } = this.props;
    const prevYear = parseInt(year, 10) - 1;

    return data.filter(
      (x) =>
        (x.date.includes("11." + prevYear) ||
          x.date.includes("12." + prevYear) ||
          x.date.includes(year)) &&
        !x.date.includes("11." + year)
    );
  }

  get years() {
    let { data } = this.props;
    let years = data.map((x) => x.date).map((x) => x.split(".")[2]);
    let extraYears = data
      .map((x) => x.date)
      .filter((x) => x.includes("11.20") || x.includes("12.20"))
      .map((x) => x.split(".")[2]) // Get Year
      .map((x) => parseInt(x, 10) + 1)
      .map((x) => x.toString());

    return unique([...years, ...extraYears])
      .sort()
      .reverse();
  }

  get tables() {
    let values = ["Midterm", "Lab", "Lecture", "Final", "Community", "Extra"];
    let tables = {};
    let data = this.data;

    values.forEach(
      (category) => (tables[category] = data.filter((x) => x.pin === category))
    );

    return values.map((x) => {
      return { data: tables[x], type: x };
    });
  }

  get modalSize() {
    if (window.innerWidth < 900) {
      return {
        width: 250,
        height: 400
      };
    }
    return {
      width: 1200,
      height: 800
    };
  }

  render() {
    let selectedYear = this.state.year;
    let { visible, onClose, abbreviation, announcements } = this.props;

    return (
      <Modal visible={visible} onClose={onClose} {...this.modalSize}>
        <Main
          announcements={announcements}
          setYear={this.setYear}
          years={this.years}
          selectedYear={selectedYear}
          tables={this.tables}
          abbreviation={abbreviation}
        />
      </Modal>
    );
  }
}

HitListModal.propTypes = propTypes;
HitListModal.defaultProps = defaultProps;

export default HitListModal;
