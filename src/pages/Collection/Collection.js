import React from 'react';
import Banner from '~/components/Collection/Banner';
import BottomBanner from '~/components/Collection/BottomBanner';

//route host/collection

export default function Collection() {
    const fakeDataBanner = {
        imgSrc: `https://degods.com/degods/meta.png`,
        logo: `https://static.okx.com/cdn/nft/files/collection/1234598-logo.png`,
        name: 'Degods',
        own: 'DeLabsMultiSig',
        website: '',
        twitter: '',
        totalVolume: '103,774 ETH',
        floorPrice: '3.69 ETH',
        bestOffer: '3.4463 WETH',
        listed: '0.8%',
        owners: '2,528',
    };
    const fakeDataBottom = {
        des: 'DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.',
        items: '8,946',
        created: 'Mar 2023',
        creatorEarnings: '0.5%',
    };
    return (
        <>
            <Banner {...fakeDataBanner} />
            <BottomBanner {...fakeDataBottom} />
        </>
    );
}
