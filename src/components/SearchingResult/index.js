import { Avatar, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react';

function SearchingResult({ result }) {
    const { avt, name, quantity, price } = result;

    return (
        <ListItem className="hover:bg-semi-primary active:bg-tertiary-primary focus:bg-tertiary-primary min-h-[56px]">
            <ListItemPrefix>
                <Avatar variant="circular" src={avt || 'https://docs.material-tailwind.com/img/face-1.jpg'}></Avatar>
            </ListItemPrefix>
            <div className="h-full">
                <Typography variant="h4" color="white">
                    {name}
                </Typography>
                {quantity > 0 && (
                    <div className="flex items-center">
                        <svg
                            fill="gray"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: '16px',
                                height: '20px',
                            }}
                        >
                            <path
                                d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                                fill="gray"
                            ></path>
                        </svg>
                        <Typography variant="h5" className="text-text-secondary ml-2">
                            {`${quantity} item` + (quantity > 1 ? 's' : '')}
                        </Typography>
                    </div>
                )}
            </div>
            {price && (
                <ListItemSuffix>
                    <Typography variant="h4" className="text-text-secondary">
                        {price >= 0.01 ? `${(Math.round(price * 100) / 100).toFixed(2)} SOL` : '<0.01 SOL'}
                    </Typography>
                </ListItemSuffix>
            )}
        </ListItem>
    );
}

export default SearchingResult;
