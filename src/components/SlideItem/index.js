import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

function SlideItem() {
    return (
        <>
            <swiper-slide>
                <Card className="text-text-primary rounded-2xl bg-elevation hover:bg-secondary overflow-hidden w-full shadow-elevation transition-all duration-200 hover:-translate-y-4 cursor-pointer">
                    <CardHeader className="mx-0 h-96 w-full rounded-t-2xl rounded-b-none bg-elevation hover:bg-elevation">
                        <img
                            className="absolute inset-0 m-auto block w-0 h-0 min-h-full min-w-full max-h-full max-w-full object-cover"
                            src="https://i.seadn.io/gae/nKEIxpf7OqQttpFhGJkfAgcwoT_mNdjE7F11s7vkaLRvUVUPARTTAQAZXYMQwUHtvYmFk76OPiQasoBVHkZtPtfFR7nF0D5ioZFewg?auto=format&dpr=1&h=500&fr=1"
                            alt="cool image"
                        />
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h2" color="white">
                            Latasha
                        </Typography>
                        <div className="flex flex-col">
                            <Typography variant="h4" className="text-text-secondary">
                                Floor
                            </Typography>
                            <Typography variant="h4" color="white">
                                0.89 SOL
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </swiper-slide>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </>
    );
}

export default SlideItem;
