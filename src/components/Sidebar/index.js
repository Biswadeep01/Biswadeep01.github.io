import './index.scss'
import LogoS from '../../assets/logon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo"/>
                <p>Biswadeep</p>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="project-link" to="/project">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="skill-link" to="/skill">
                    <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/biswadeep-mukhopadhyay/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}  />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/BiswadeepMukho1" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Biswadeep01" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
