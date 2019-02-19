import React, { Component, Fragment } from 'react'
import NavBar from './utils/NavBar'
import './About.css'

class About extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="about-container">

          <div className="content-container">
            <div className="container-header">
              About this project
            </div>
              This project was built for the <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank">Udacity React Nanodegree Program</a>.
              MyReads allows users to search from a catalog of books and categorize books they have read, are currently reading, or want to read.
          </div>



          <div className="author-container">
            <div className="container-header">
              Author
            </div>
            <div className="list-contacts">
              <div className="list-contacts-row">
                <div className="list-contacts-col-icon">
                  <img src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" alt="Linkedin alt" />
                </div>
                <div className="list-contacts-col-text">
                    <a href="www.linkedin.com/in/filipe-natanael-641502138" target="_blank">Filipe Natanael de Morais</a>
                </div>
              </div>

              <div className="list-contacts-row">
                <div className="list-contacts-col-icon">
                  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="GitHub alt" />
                </div>
                <div className="list-contacts-col-text">
                  <a href="https://github.com/filipenatanael" target="_blank">github.com/filipenatanael</a>
                </div>
              </div>
            </div>
          </div>


          <div className="content-container">
            <div className="container-header">
              Best practices
            </div>
            This application was built looking for the best abstraction possible of the functionalities, in order to facilitate the understanding and future maintenance.
          </div>

          <div className="list-badges">
            <img src="https://travis-ci.org/filipenatanael/reactnd-myreads.svg?branch=master" alt="Travis CI alt" />
            <img src="https://api.codacy.com/project/badge/Grade/2bb969547aa240469a94a687746792e1" alt="Codacy alt" />
            <img src="https://api.codeclimate.com/v1/badges/b1553dba7581b75f1afc/maintainability" alt="codeclimate alt" />
          </div>

          <div className="content-container">
            <div className="container-header">
              Contribute
            </div>
            <div className="list-contacts-row">
              <div className="list-contacts-col-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Octicons-git-branch.svg/2000px-Octicons-git-branch.svg.png" alt="GitHub alt" />
              </div>
              <div className="list-contacts-col-text">
                <a href="https://github.com/filipenatanael/reactnd-myreads" target="_blank">filipenatanael/reactnd-myreads</a>
              </div>
            </div>
          </div>

        </div>
      </Fragment>
    );
  }
}

export default About
