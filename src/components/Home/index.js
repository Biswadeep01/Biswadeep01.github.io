import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Image from '../../assets/DP.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', ' ', 'B', 'i', 's', 'w', 'a', 'd', 'e', 'e', 'p', ' ', 'M', 'u', 'k', 'h', 'o', 'p', 'a', 'd', 'h', 'y', 'a', 'y']
    const jobArray = [ 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _14`}>'</span>
                        <span className={`${letterClass} _15`}>m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={10}/><br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                    </h1>
                    <h2>Learner / PHP Expert / Python / AI Enthusiast</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <img src={Image} alt="Biswadeep Mukhopadhyay"/>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default Home