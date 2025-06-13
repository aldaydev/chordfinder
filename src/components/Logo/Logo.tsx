import { Link } from "react-router-dom";
import './Logo.css';

export default function Logo() {
    return (
        <Link to={'/'} aria-label="Go to home" className="logo__link">
            <img 
                src='/brand/chordfinder_icon.svg' 
                alt="Chord Finder oficial logo" 
                className="logo__image"
            />
            <div className="logo__textContainer">   
                <span className="logo__text">CHORD</span>
                <span className="logo__text">FINDER</span>
            </div>
            
        </Link>
    )
}
