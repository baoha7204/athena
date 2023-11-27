import { Carousel, Typography } from '@material-tailwind/react';

const dataSample = [
    {
        title: 'Đây Là Title Slide Image 1',
        author: 'Author',
        quantity: 333,
        price: 0.667777777,
        background:
            'https://i.seadn.io/gae/bfxX_mwGWIdUX9FqcjrSfo2cg-S2VTkuvQvyzfb3LJMf7LIEZmiisHXQ0FgbRUsut0BYe_qGBxh90NK-jc9HtW2NdjHfaHThLE4Gaw?auto=format&dpr=1&w=1000',
        logo: 'https://i.seadn.io/gae/bqKv1RlgiqgS90SfiLkfrBOMqXKB7b0GpHM08LaHVwnlOVeMM0d6c4NZdk2iPqZEEvcyLypyh1hVYMa_b8XtJi-8oihkAWsQpGlS?auto=format&dpr=1&w=384',
    },
    {
        title: 'Đây Là Title Slide Image 2',
        author: 'Author',
        quantity: 333,
        price: 0.667777777,
        background:
            'https://i.seadn.io/gae/bfxX_mwGWIdUX9FqcjrSfo2cg-S2VTkuvQvyzfb3LJMf7LIEZmiisHXQ0FgbRUsut0BYe_qGBxh90NK-jc9HtW2NdjHfaHThLE4Gaw?auto=format&dpr=1&w=1000',
        logo: 'https://i.seadn.io/gae/bqKv1RlgiqgS90SfiLkfrBOMqXKB7b0GpHM08LaHVwnlOVeMM0d6c4NZdk2iPqZEEvcyLypyh1hVYMa_b8XtJi-8oihkAWsQpGlS?auto=format&dpr=1&w=384',
    },
];

const SlideImage = ({ data = dataSample || [] }) => {
    return (
        <Carousel className="rounded-xl h-[500px] overflow-hidden" loop navigation={() => null}>
            {data?.map(({ title, author, quantity, price, background, logo }, index) => (
                <div key={index} className="relative h-full w-full group cursor-pointer">
                    <img
                        src={background}
                        alt="image 1"
                        className="h-full w-full object-cover group-hover:scale-110 transition-all"
                    />
                    <div className="absolute inset-0 flex flex-row justify-between items-end h-full w-full px-14 py-12 bg-black/50 ">
                        <div className="flex flex-col items-start justify-end text-white">
                            <div className="w-[70px] h-[70px] rounded-xl border border-white mb-6">
                                <img alt="" className="w-full h-full object-cover" src={logo} />
                            </div>
                            <Typography className="my-1 " variant="h1">
                                {title}
                            </Typography>
                            <Typography className="my-1" variant="h3">
                                By {author}
                            </Typography>
                            <Typography className="my-1" variant="h4">
                                {quantity} items - {price}ETH
                            </Typography>
                        </div>
                        <span className="text-white font-semibold bg-gray-900/80 px-8 py-6 rounded-xl group-hover:text-black group-hover:bg-white transition-all">
                            View collection
                        </span>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};
/* 
SlideImage.propsType = {
    data: {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        background: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    },
}; */

export default SlideImage;
