import classNames from 'classnames/bind';
import Search from '~/features/search/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className="flex items-center justify-between w-full h-full mx-4 max-w-[2560px] sm:mx-8 xl:mx-16">
                <div>Explore</div>
                <Search />
                <div>Profile</div>
            </div>
        </header>
    );
}

export default Header;
