import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container project-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'm', 'i', 'n', 'g', ' ', 'S', 'o', 'o', 'n', '.', '.', '.']} idx={15}/>
                    </h1>
                </div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default Project