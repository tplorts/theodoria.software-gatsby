import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/lib/fa'
import MapMyRepsLogo from '../components/MapMyRepsLogo'

const IconSize = 30

const IndexPage = () => (
  <div>

    <section>
      <div className="title">
        <h1>Ted Lorts</h1>
        <h2>Software Product Engineer</h2>
        <h3>Web & Mobile, Full Stack</h3>
      </div>
      <div className="links">
        <a href="mailto:contact@theodoria.software">
          <FaEnvelope size={IconSize} />
        </a>
        <a href="https://github.com/tplorts" target="_blank">
          <FaGithub size={IconSize} />
        </a>
        <a href="https://www.linkedin.com/in/ted-lorts-908a9584/" target="_blank">
          <FaLinkedin size={IconSize} />
        </a>
      </div>
    </section>

    <section>
      <h3>Recent Work</h3>
      <ul className="projects">
        <li>
          <a href="http://mapmyreps.us" target="_blank" className="mapmyreps">
            <MapMyRepsLogo />
          </a>
          <p>Map My Reps is a clean & simple interactive map view of the USA to clearly show each state's Senators and Representatives, along with details and links for each Congressperson.</p>
        </li>
        <li>
          <a href="http://word-search.theodoria.software" target="_blank" className="word-search">
            <h4>Word Search</h4>
          </a>
          <p>Automatically generates a word search given the desired grid size and a list of words.  It can then be played in the browser.  I built this app as a fun project to get more familiar with the latest version of angular.</p>
        </li>
      </ul>
    </section>

  </div>
)


export default IndexPage
