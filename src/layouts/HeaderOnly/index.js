import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="bg-primary">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
