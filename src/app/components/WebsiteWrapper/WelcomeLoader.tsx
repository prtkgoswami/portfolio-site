import { SanityImage } from '@sanity/types';
import './welcomeLoader.css';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const WelcomeLoader = ({ logo }: { logo?: SanityImage }) => {
    return (
        <div id="wrapper">
            <div id="left-panel">
                <div className='caution-tape'></div>
            </div>
            <div id="right-panel">
                <div id="logo">
                    <div id="logo-wrapper">
                        <Image src={logo ? urlFor(logo).url() : '/imgs/web_logo_v3.png'} alt={logo?.alt ?? 'Logo'} fill />
                    </div>
                </div>
                <div className='caution-tape'></div>
            </div>
        </div>
    )
}

export default WelcomeLoader;