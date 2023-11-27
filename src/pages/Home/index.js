import SlideImage from '~/components/Home/SlideImage';
import Spotlight from '~/features/spotlight/Spotlight';

function Home() {
    return (
        <div className="flex flex-col gap-16 flex-1">
            <SlideImage />
            <Spotlight />
        </div>
    );
}

export default Home;
