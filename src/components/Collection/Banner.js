import React from 'react';

export default function Banner({ imgSrc, logo, name, own, totalVolume, floorPrice, bestOffer, listed, owners }) {
    const ItemList = ({ name, value }) => (
        <li className="mx-6">
            <p className="text-3xl font-semibold mb-2">{value}</p>
            <p className="text-2xl font-semibold text-gray-400">{name}</p>
        </li>
    );
    return (
        <div className="w-full h-[300px] relative">
            <img alt="" src={imgSrc} className="w-full h-full object-contain" />
            <div class="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-black/5 to-black/70 text-white py-10">
                <div className="flex flex-row justify-between items-end container h-full mx-auto">
                    <div className="flex flex-col justify-end items-start">
                        <img
                            src={logo}
                            alt="logo"
                            className="rounded-xl object-contain object-center w-[90px] h-[90px] mb-5"
                        />
                        <p className="mt-4 text-3xl font-semibold">{name}</p>
                        <p className="mt-3 text-2xl font-semibold text-gray-400">{own}</p>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-center items-end">
                            <ItemList name="Total volume" value={totalVolume} />
                            <ItemList name="Floor price" value={floorPrice} />
                            <ItemList name="Best offer" value={bestOffer} />
                            <ItemList name="Listed" value={listed} />
                            <ItemList name="Owners" value={owners} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
