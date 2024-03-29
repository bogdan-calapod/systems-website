/**
 * Home Routing Component
 */

import React, { Component } from "react";

import Container from "components/Bachelor";
import Header from "components/Common/Header";

import request from "axios";

class Bachelor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      courses: [],
      people: [],
    };
  }

  componentWillMount(){
    request
      .get(`${process.env.PUBLIC_URL}/api/notifications.json`)
      .then((x) => this.setState({ ...this.state, notifications: x.data }));
  }

  async componentDidMount() {
    let projects, courses, people, date, url, hitlists, hitlist_announcements;

    try {
      projects = await request.get(`${process.env.PUBLIC_URL}/api/projects.json`);
      courses = await request.get(`${process.env.PUBLIC_URL}/api/courses.json`);
      people = await request.get(`${process.env.PUBLIC_URL}/api/people.json`);
      // collaborators = await request.get("/api/collaborators.json");

      hitlist_announcements = await request.get(`${process.env.PUBLIC_URL}/api/hitlist_announcements.json`);
      hitlists = await request.get(`${process.env.PUBLIC_URL}/api/hitlists.json`);

      // date = collaborators.data[0].bachelorDate;
      // url = collaborators.data[0].bachelorURL;
    } catch (e) {
      console.warn("Error making requests");
      return;
    }

    this.setState({
      projects: projects.data.filter((x) => x.type === "bachelor"),
      courses: courses.data.filter((x) => x.type === "bachelor"),
      people: people.data,
      date,
      url,

      hitlist_announcements : hitlist_announcements.data,
      hitlists : hitlists.data,
    });
  }

  render() {
    return (
      <div>
        <Header small data={this.state.notifications} />
        <Container
          projects={this.state.projects}
          courses={this.state.courses}
          date={this.state.date}
          url={this.state.url}
          people={this.state.people}
          hitlists={this.state.hitlists}
          hitlist_announcements={this.state.hitlist_announcements}
        />
      </div> 
    );
  }
}

export default Bachelor;
