import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="myContainer">
                <Sidebar />
                <div className="content px-[32px]">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
