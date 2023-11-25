import React, { useState } from 'react';

export default function BottomBanner({ des, items, creatorEarnings, created }) {
    const [desExpanded, setDesExpanded] = useState(false);
    const ItemList = ({ name, value }) => (
        <li className="mr-6">
            <span className="mr-2 font-light">{name}</span>
            <span className="font-medium">{value}</span>
        </li>
    );
    return (
        <div className="w-full container mx-auto py-8">
            <div className="">
                <span
                    className={` w-1/2 ${
                        desExpanded ? 'line-clamp-none' : 'line-clamp-1 text-ellipsis !webkit-inline-box'
                    }`}
                >
                    {des}
                </span>
                {desExpanded && (
                    <p
                        className="cursor-pointer font-semibold hover:opacity-80 mt-2"
                        onClick={() => setDesExpanded((prev) => !prev)}
                    >
                        See less
                    </p>
                )}

                {!desExpanded && (
                    <span
                        className="cursor-pointer font-semibold hover:opacity-80 align-top"
                        onClick={() => setDesExpanded((prev) => !prev)}
                    >
                        See more
                    </span>
                )}
            </div>
            <ul className="flex justify-start items-center mt-3">
                <ItemList name={'Items'} value={items} />
                <ItemList name={'Created'} value={created} />
                <ItemList name={'Creator earnings'} value={creatorEarnings} />
            </ul>
        </div>
    );
}
