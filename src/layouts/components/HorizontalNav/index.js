import { Navbar } from '@material-tailwind/react';
import CustomLink from '~/components/CustomLink';

function HorizontalNav({ categories }) {
    return (
        <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4 bg-transparent border-0 max-w-full">
            <div className="container flex items-center justify-between">
                <ul className="mt-2 mb-4 flex gap-4 lg:mb-0 lg:mt-0 items-center lg:gap-8">
                    {Object.keys(categories).map((category) => {
                        return <CustomLink to={categories[category]}>{category}</CustomLink>;
                    })}
                </ul>
            </div>
        </Navbar>
    );
}

export default HorizontalNav;
