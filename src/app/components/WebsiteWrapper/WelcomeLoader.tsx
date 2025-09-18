import './welcomeLoader.css';
import Image from 'next/image';

const WelcomeLoader = ({ onClose }: { onClose: () => void; }) => {

    return (
        <div id="wrapper">
            <div id="left-panel" onAnimationEnd={onClose}>
                <div className='caution-tape'></div>
            </div>
            <div id="right-panel">
                <div className='caution-tape'></div>
            </div>

            <div id="left-logo" className="logo">
                <div className="logo-wrapper">
                    <Image src={'/imgs/web_logo_p.png'} alt={'Logo P'} fill />
                </div>
            </div>
            <div id="right-logo" className="logo">
                <div className="logo-wrapper">
                    <Image src={'/imgs/web_logo_g.png'} alt={'Logo G'} fill />
                </div>
            </div>
        </div>
    )
}

export default WelcomeLoader;