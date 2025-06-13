import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

export default function Header() {
    return (
        <header className='App__header'>
            <Logo/>
            <nav className='header__headernNav'>
                <ul className='headernNav__list'>
                    <li className='headernNav__item'>
                        <Link 
                            to={'/search'} 
                            aria-label='Go to search page'
                            className='headernNav__link'
                        >
                            <span className='headernNav__text'>SEARCH</span>
                            <img src='/icons/search_icon.svg' alt='Search icon' className='headernNav__icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to={'/about'} 
                            aria-label='Go to about page'
                            className='headernNav__link'
                        >
                            <span className='headernNav__text'>ABOUT</span>
                            <img src='/icons/about_icon.svg' alt='About icon' className='headernNav__icon'/>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
