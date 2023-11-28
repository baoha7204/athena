import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

function CustomLink({ to, children, ...props }) {
    const resovledPath = useResolvedPath(to);
    const isActive = useMatch({
        path: resovledPath.pathname,
        end: true,
    });
    return (
        <Typography
            as="li"
            variant="h3"
            color="white"
            className={'capitalize font-semibold px-4 py-2' + (isActive ? ' bg-secondary rounded-2xl' : '')}
        >
            <Link to={to} {...props}>
                {children}
            </Link>
        </Typography>
    );
}

export default CustomLink;
