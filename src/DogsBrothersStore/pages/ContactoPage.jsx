import React from "react";
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
    Textarea,
} from "@material-tailwind/react";

export const ContactoPage = () => {
    const [type, setType] = React.useState("card");
    const [cardNumber, setCardNumber] = React.useState("");
    const [cardExpires, setCardExpires] = React.useState("");

    return (
        <Card className="w-full max-w-[40rem] mt-20 mb-20 mr-auto ml-auto">
            <CardHeader
                color="gray"
                floated={false}
                shadow={false}
                className="m-0 grid place-items-center px-4 py-10 text-center"
            >
                <img alt="logo" className="w-14" src="./assets/logos/logo_large.png" />
            </CardHeader>
            <CardBody>
                <Tabs value={type} className="overflow-visible">
                
                    <TabsBody
                        className="!overflow-x-hidden !overflow-y-visible"
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
                        <form className="mt-2 flex flex-col gap-4">
                            <div>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    Nombre Completo
                                </Typography>
                                <Input 
                                    type="text"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }} />
                                    
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mt-4 mb-2 font-medium"
                                >
                                    Email
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
                                    variant="small"
                                    color="blue-gray"
                                    className="mt-4 mb-2 font-medium"
                                >
                                    Comentarios
                                </Typography>
                                <Textarea label="Message" />
                                
                            </div>
                            <Button size="lg">Enviar</Button>
                        </form>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </CardBody>
        </Card>
    );
}
