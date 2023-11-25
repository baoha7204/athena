import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
