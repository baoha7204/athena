import React from "react";
import {
    Card,
    Input,
} from "@material-tailwind/react";

export default function LoginCard() {
    return (
        <div className="flex items-center justify-center h-screen divide-x">
            <Card className="flex w-[1000px] h-[600px] bg-white overflow-hidden shadow-md border border-gray-300" style={{ borderRadius: '10px' }}>
                <div className="grid grid-cols-2 h-[600px] divide-x">
                    <div className="">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square.jpg"
                            alt="card-image"
                        />
                    </div>
                    <div className="grid grid-cols-1 divide-y">
                        <div className="h-[100px] flex items-center justify-center">
                            <p className="uppercase text-6xl font-bold transition duration-300 transform hover:text-[#479794] hover:scale-110">
                                Login
                            </p>
                        </div>
                        <div className="h-[400px] ">
                            <div className="w-72 mx-auto flex flex-col items-end gap-6">
                                <Input size="md" label="Input Medium" />
                                <Input size="lg" label="Input Large" />
                            </div>
                        </div>
                        <div className="h-[50px]">03</div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
