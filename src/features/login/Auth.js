import React from "react";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import {
    Card,
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


                    <div className="grid grid-cols-1 divide-y-0">
                        <div className="h-[100px] flex items-center justify-center">
                            <p className="uppercase text-6xl font-bold transition duration-300 transform hover:text-[#479794] hover:scale-110">
                                Login
                            </p>
                        </div>

                        <div className="h-[350px] ">
                            <div className="flex flex-col items-center gap-6 mx-auto">
                                <div className="relative mt-10 h-20 w-[350px]">
                                    <input
                                        placeholder="Enter your username or email"
                                        className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-lg font-bold text-blue-gray outline outline-0 transition-all placeholder-shown:border-black focus:border-teal-500 focus:outline-0 disabled:border-0 disabled:bg-black"
                                    />
                                    <label
                                        className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-2xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-teal-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:after:scale-x-100 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                                        Username
                                    </label>
                                </div>
                                <div className="relative mt-10 h-20 w-[350px]">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-lg font-bold text-black outline outline-0 transition-all placeholder-shown:border-black focus:border-teal-500 focus:outline-0 disabled:border-0 disabled:bg-black"
                                    />
                                    <label
                                        className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-2xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-teal-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:after:scale-x-100 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                                        Password
                                    </label>
                                </div>

                                <div className="normal-case text-lg text-black hover:text-teal-500 underline underline-offset-2 cursor-pointer mr-[-25rem]">
                                    <p>Forgot password?</p>
                                </div>

                                <button
                                    className=" w-[350px] h-16 middle none center rounded-lg bg-teal-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true"
                                >
                                    Login
                                </button>

                                <div className="inline-flex ml-[-23rem]">
                                    <label
                                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="login"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            id="login"
                                            type="checkbox"
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                                        />
                                        <div
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="1"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                        htmlFor="login"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <div className="border-b-2 w-[300px] mb-1"></div>

                                <div className="flex items-center justify-center">
                                    <p className="text-lg text-black mr-1">You don't have an account?</p>
                                    <div className="text-lg text-black hover:text-teal-500 underline underline-offset-2 cursor-pointer">
                                        <p>Sign Up</p>
                                    </div>
                                </div>

                                <div className="flex">
                                   <span
                                        data-tooltip-target="facebook"
                                        className="cursor-pointer rounded-full border border-teal-500/50 bg-teal-500/5 p-3 text-teal-500 transition-colors hover:border-teal-500/10 hover:bg-teal-500/10 hover:!opacity-100 group-hover:opacity-70"
                                    >
                                       <FaFacebook className="w-5 h-5" />
                                   </span>

                                   <span
                                        data-tooltip-target="X"
                                        className="cursor-pointer rounded-full border border-teal-500/50 bg-teal-500/5 p-3 text-teal-500 transition-colors hover:border-teal-500/10 hover:bg-teal-500/10 hover:!opacity-100 group-hover:opacity-70 ml-3"
                                    >
                                        <FaXTwitter className="w-5 h-5" />
                                   </span>

                                   <span
                                        data-tooltip-target="google"
                                        className="cursor-pointer rounded-full border border-teal-500/50 bg-teal-500/5 p-3 text-teal-500 transition-colors hover:border-teal-500/10 hover:bg-teal-500/10 hover:!opacity-100 group-hover:opacity-70 ml-3"
                                    >
                                        <FaGoogle className="w-5 h-5" />
                                   </span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[50px]"></div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
