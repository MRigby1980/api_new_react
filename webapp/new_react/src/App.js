import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    }
    this.accordionToggle = this.accordionToggle.bind(this);
  }

  accordionToggle() {
    this.setState(prevState => {
      return {
          isVisible: !prevState.isVisible,
      }
    });
  }

  render() {
    return (
      <div>
          <Layout>
              <Header title="React Test App" scroll style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                  <Navigation>
                      <Link to="/Home">Home</Link>
                      <Link to="/About">About</Link>
                      <Link to="/Reports">Reports</Link>
                      <Link to="/StudentReport">Student Report</Link>
                  </Navigation>
              </Header>
              <Drawer title="React Test App" style={{marginTop: "65px"}}>
                  <Navigation>
                      <Link to="/Home">Home</Link>
                      <Link to="/About">About</Link>

                      <Link to="#" className="accordion" onClick={this.accordionToggle}>Reports</Link>
                      {this.state.isVisible ?
                          <ul className="toggleList" style={{marginLeft: "30px"}}>
                            <li>
                              <Link to="/Reports">Reports</Link>
                            </li>
                            <li>
                              <Link to="/StudentReport">Student Report</Link>
                            </li>
                          </ul>
                          : null
                      }
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
