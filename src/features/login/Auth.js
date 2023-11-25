import React, { useState } from 'react';
import { useCountries } from "use-react-countries";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
    Checkbox,
} from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { IoLogInOutline } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";








function formatCardNumber(value) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(" ");
    } else {
        return value;
    }
}

function formatExpires(value) {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function CheckoutForm() {
    const { countries } = useCountries();
    const [type, setType] = React.useState("card");
    const [cardNumber, setCardNumber] = React.useState("");
    const [cardExpires, setCardExpires] = React.useState("");

    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");

    const [EmailAdress, setEmailAdress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [UserName, setUserName] = useState("");
    const [LastName, setLastName] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [Country, setCountry] = useState("");
    const [PasswordSignup, setPasswordSignup] = useState("");

    const  handleSignup = async () => {
        try {
            const data = {
                EmailAdress: EmailAdress,
                PhoneNumber: PhoneNumber,
                UserName: UserName,
                LastName: LastName,
                FirstName: FirstName,
                Country: Country,
                PasswordSignup: PasswordSignup,
            };

            const response = await fetch('url_of_your_api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Thêm các headers khác nếu cần thiết (ví dụ: token xác thực)
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Login successful:', responseData);
            } else {
                console.error('Login failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    const handleLogin = async () => {
        try {
            const data = {
                emailOrUsername: emailOrUsername,
                password: password,
            };

            // Gửi request POST tới API
            const response = await fetch('url_of_your_api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Thêm các headers khác nếu cần thiết (ví dụ: token xác thực)
                },
                body: JSON.stringify(data),
            });


            if (response.ok) {
                const responseData = await response.json();
                console.log('Login successful:', responseData);
            } else {
                console.error('Login failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Card className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20 mt-20 w-full md:w-[300px] lg:w-[350px] transform scale-125">
            <CardHeader
                color="gray"
                floated={false}
                shadow={false}
                className="m-0 grid place-items-center px-4 py-8 text-center"
            >
                <div className="mb-4 h-20 p-6 text-white transform scale-125">
                    {type === "card" ? (
                        <IoLogInOutline className="h-10 w-10 text-white" />
                    ) : (
                        <img alt="paypal " className="w-14 filter brightness-0 invert" src="https://cdn-icons-png.flaticon.com/512/5599/5599504.png" />
                    )}
                </div>
                <Typography variant="h5" color="white">
                    Welcome to Athena
                </Typography>
            </CardHeader>
            <CardBody>
                <Tabs value={type} className="overflow-visible">
                    <TabsHeader className="relative z-0 ">
                        <Tab value="card" onClick={() => setType("card")}>
                            Login
                        </Tab>
                        <Tab value="paypal" onClick={() => setType("paypal")}>
                            Sign Up
                        </Tab>
                    </TabsHeader>
                    <TabsBody
                        className="!overflow-x-hidden !overflow-hidden"
                        animate={{
                            initial: {
                                x: type === "card" ? 400 : -400,
                            },
                            mount: {
                                x: 0,
                            },
                            unmount: {
                                x: type === "card" ? 400 : -400,
                            },
                        }}
                    >
                        <TabPanel value="card" className="p-0">
                            <form className="mt-12 flex flex-col gap-4">
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-2 font-medium"
                                    >
                                        Your Email or Username
                                    </Typography>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email or username"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>

                                <div className="my-3">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-2 font-medium "
                                    >
                                        Password
                                    </Typography>

                                    <Input
                                        type="password"
                                        maxLength={19}
                                        value={formatCardNumber(cardNumber)}
                                        onChange={(event) => setCardNumber(event.target.value)}
                                        icon={
                                            <AiFillEyeInvisible className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                                        }
                                        placeholder="Enter your password"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Checkbox label="Remember Me"/>
                                </div>
                                <Button onClick={ handleLogin } size="lg">Login</Button>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                                >
                                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Your account should be kept confidential and should not be disclosed
                                </Typography>
                            </form>
                        </TabPanel>
                        <TabPanel value="paypal" className="p-0">
                            <form className="mt-12 flex flex-col gap-4">
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="mb-4 font-medium"
                                    >
                                        Personal Details
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-2 font-medium"
                                    >
                                        Your Email
                                    </Typography>
                                    <Input
                                        type="email"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Typography
                                        type="phone"
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-3 -mb-2 font-medium"
                                    >
                                        Phone Number
                                    </Typography>
                                    <Input
                                        placeholder="0xxxxxxxxxxxxxxxxxxxxxxxx"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        containerProps={{ className: "mt-4" }}
                                    />

                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-3 -mb-2 font-medium"
                                    >
                                        User name
                                    </Typography>
                                    <Input
                                        placeholder="Enter your username"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        containerProps={{ className: "mt-4" }}
                                    />
                                </div>

                                <div className="mt-1 flex items-center gap-4 ">
                                    <div>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mb-2 font-medium"
                                        >
                                            Last Name
                                        </Typography>
                                        <Input
                                            onChange={(event) => setCardExpires(event.target.value)}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            placeholder="David"
                                            className="w-[150px] !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />

                                    </div>
                                    <div className="ml-auto">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mb-2 font-medium"
                                        >
                                            First Name
                                        </Typography>
                                        <Input
                                            containerProps={{ className: "min-w-[72px]" }}
                                            placeholder="Kiem Tuyen"
                                            className="w-[150px] !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-2 font-medium"
                                    >
                                        Country
                                    </Typography>
                                    <Select
                                        placeholder="USA"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        menuProps={{ className: "h-48" }}
                                    >
                                        {countries.map(({ name, flags }) => (
                                            <Option key={name} value={name}>
                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        src={flags.svg}
                                                        alt={name}
                                                        className="h-4 w-4 rounded-full object-cover"
                                                    />
                                                    {name}
                                                </div>
                                            </Option>
                                        ))}
                                    </Select>

                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="mt-3 font-medium"
                                    >
                                        Create Password
                                    </Typography>

                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-3 -mb-2 font-medium"
                                    >
                                        Password
                                    </Typography>
                                    <Input
                                        type='password'
                                        placeholder="Enter your password"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        containerProps={{ className: "mt-4" }}
                                    />

                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-3 -mb-2 font-medium"
                                    >
                                        Retype Password
                                    </Typography>
                                    <Input
                                        type='password'
                                        placeholder="Enter your password"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        containerProps={{ className: "mt-4" }}
                                    />
                                </div>
                                <Checkbox label="I guarantee that all information I provide is accurate"/>
                                <Button onClick={ handleSignup} size="lg">Sign Up</Button>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center justify-center gap-2 font-medium opacity-60"
                                >
                                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Create a account and join with us
                                </Typography>
                            </form>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </CardBody>
        </Card>
    );
}