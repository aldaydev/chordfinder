import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='App__footer'>
            <span>Created from </span>
            <Link 
                to='https://chords.alday.dev'
                aria-label='Go to Chords API'
                className='appFooter__link'
                target='_blank'
                rel='noreferrer noopener'
            >
                <img src='/brand/chordsapi_icon.svg'/>
                <span>CHORDS API</span>
            </Link>
            <div className='appFooter__authorContainer'>
                <span>by</span>
                <Link 
                    to='https://alday.dev' 
                    aria-label='Go to AldayDev portfolio'
                    className='appFooter__link appFooter__link--aldaydev'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <span>{`{ AldayDev }`}</span>
                </Link>
            </div>
            
        </footer>
    )
}
