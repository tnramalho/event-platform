import scrollTo from 'shared/scroll-to';

import Anchor from '@qrt/atoms/anchor';
import Image from '@qrt/atoms/image';
import Menu from '@qrt/molecules/menu';

import Styles from './Footer.css';

const mockUrl = '/logofooter.png';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.content}>
                <Anchor onClick={() => scrollTo('expositores')}>
                    <Image className={Styles.logo} src={mockUrl} />
                </Anchor>
                <Menu logo={mockUrl} />
            </div>
        </div>
    );
}
