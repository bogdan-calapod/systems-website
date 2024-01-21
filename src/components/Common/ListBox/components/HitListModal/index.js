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
      year: "2021"
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

  get year_people() {
    const { year } = this.state;
    let { hitlists } = this.props.data;
    const prevYear = parseInt(year, 10) - 1;

    return hitlists.filter(
      (x) =>
        ( x.date.includes("11." + prevYear) ||
          x.date.includes("12." + prevYear) ||
          x.date.includes(year)) &&
        !x.date.includes("11." + year) &&
        !x.date.includes("12." + year)
    );
  }

  get years() {
    let { hitlists } = this.props.data;

    let years = hitlists.map((x) => x.date).map((x) => x.split(".")[2]);
    let extraYears = hitlists
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
    // let { hitlists } = this.props.data;
    let hitlists = this.year_people;

    values.forEach(
      (category) => (tables[category] = hitlists.filter((x) => x.pin === category))
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
    let { visible, onClose, abbreviation } = this.props;
    let announcements = this.props.data.hitlist_announcements;

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
