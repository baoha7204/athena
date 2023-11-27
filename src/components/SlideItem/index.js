import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { formatPrice } from '~/utils/format';

function SlideItem({ data }) {
    const { avt, name, price } = data;

    return (
        <>
            <swiper-slide>
                <Card className="text-text-primary rounded-2xl bg-elevation hover:bg-secondary overflow-hidden w-full shadow-elevation transition-all duration-200 hover:-translate-y-4 cursor-pointer">
                    <CardHeader className="mx-0 h-96 w-full rounded-t-2xl rounded-b-none bg-elevation hover:bg-elevation">
                        <img
                            className="absolute inset-0 m-auto block w-0 h-0 min-h-full min-w-full max-h-full max-w-full object-cover"
                            src={avt}
                            alt="cool image"
                        />
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4 overflow-hidden">
                        <Typography
                            variant="h3"
                            color="white"
                            className="text-ellipsis overflow-hidden whitespace-nowrap"
                        >
                            {name}
                        </Typography>
                        <div className="flex flex-col">
                            <Typography variant="h4" className="text-text-secondary">
                                Floor
                            </Typography>
                            <Typography variant="h4" color="white">
                                {formatPrice(price, 'SOL')}
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </swiper-slide>
        </>
    );
}

export default SlideItem;
