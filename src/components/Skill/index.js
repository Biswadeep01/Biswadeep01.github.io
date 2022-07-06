/* eslint-disable jsx-a11y/alt-text */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import CV from '../../assets/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProgressBar from './ProgressBar'

const Skill = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container skill-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', ':', '-']} idx={15} />
                    </h1>
                    <p className='skill'>
                        Expert in the frontend web development with HTML5, CSS, Javascript, ReactJS and backend development with PHP.
                        Skilled in database designing specially in MySQL and Oracle Database (SQL Plus).
                        Also have expertise in Python programming language.
                    </p>
                    <p className='skill'>
                        Worked in some web development programmes in college and also in personal interest.
                        Solely developed some python projects, those all are availabe in the <a href='../Project'>Project</a> page.
                    </p>
                    <p className='skill'>
                        You can checkout my Github Account by clicking here &nbsp;<a href="https://github.com/Biswadeep01" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} color="#000000" /></a> &nbsp;or you can go through my Resume by clicking it here &nbsp;<a href={CV} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} color="#000000" /></a>
                    </p>
                </div>
                <div className="progress">
                    <h3>Skill Bar:</h3>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#F06529" progress='85'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#28A4D9" progress='80'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#EFD81D" progress='65'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#474A8A" progress='90'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#00758F" progress='76'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#306998" progress='85'  height={30} /></div>
                    </div>
                    <div className="pro">
                        <div className="image"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></div>
                        <div className="prog"><ProgressBar bgcolor="#61DBFB" progress='58'  height={30} /></div>
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default Skill
