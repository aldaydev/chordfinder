import './Spinner.css';
import spinner from '@/assets/chordfinder_spinner.svg';

type SpinnerProps = {
    customClass: string
}

export default function Spinner({customClass} : SpinnerProps) {
    return (
        <div className={customClass ? `spinnerContainer spinnerContainer--${customClass}` : 'spinnerContainer'}>
            <img src={spinner} alt='Chord Finder Spinner'/>
        </div>
    )
}
