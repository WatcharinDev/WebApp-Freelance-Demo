"use client"
import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel } from "@mui/material";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Select from "@/components/Select/Select";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
type Props = {}

const ItemUpdate = (props: Props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <h2 className="text-title font-semibold leading-title">Item update</h2>
            <Card className="mt-6 rounded-[16px]">
                <CardContent>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Default" {...a11yProps(0)} />
                                <Tab label="English (EN)" {...a11yProps(1)} />
                                <Tab label="Thai-ไทย (TH)" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <div className="flex gap-6">
                                <div className="w-[60%]">
                                    <Input label="Name ( Default) * " />
                                    <TextArea label="Short description (Default) * " />
                                </div>
                                <div className="flex justify-start gap-6 w-[40%]">
                                    <div className="w-full">

                                        <div className="flex flex-col items-center justify-center w-full h-full">
                                            <label className="mb-2 font-semibold text-gray-700">Item Image * ( Ratio 1:1)</label>
                                            <label
                                                htmlFor="file-upload"
                                                className="flex flex-col items-center justify-center w-52 h-52 p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
                                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2482 16.6671C14.1475 9.74904 20.4783 4.66666 28 4.66666C35.5217 4.66666 41.8525 9.74904 43.7518 16.6671C49.4342 17.9891 53.6667 23.0825 53.6667 29.1667C53.6667 33.6184 51.398 37.5393 47.9646 39.8375C46.8937 40.5544 45.4445 40.2673 44.7276 39.1965C44.0108 38.1256 44.2978 36.6763 45.3687 35.9595C47.5632 34.4905 49 31.9959 49 29.1667C49 24.9148 45.749 21.4196 41.5988 21.0352C40.5415 20.9373 39.6837 20.138 39.5115 19.0904C38.6017 13.5559 33.7917 9.33332 28 9.33332C22.2083 9.33332 17.3983 13.5559 16.4885 19.0904C16.3163 20.138 15.4584 20.9373 14.4012 21.0352C10.251 21.4196 7 24.9148 7 29.1667C7 31.9959 8.43675 34.4905 10.6313 35.9595C11.7022 36.6763 11.9892 38.1256 11.2723 39.1965C10.5555 40.2673 9.10628 40.5544 8.03539 39.8375C4.60197 37.5393 2.33333 33.6184 2.33333 29.1667C2.33333 23.0825 6.56576 17.9891 12.2482 16.6671ZM25.6667 33.6332L20.3166 38.9832C19.4054 39.8945 17.928 39.8945 17.0167 38.9832C16.1055 38.072 16.1055 36.5946 17.0167 35.6834L26.3501 26.3501C27.2613 25.4389 28.7387 25.4389 29.6499 26.3501L38.9832 35.6834C39.8945 36.5946 39.8945 38.072 38.9832 38.9832C38.072 39.8945 36.5946 39.8945 35.6834 38.9832L30.3333 33.6332V49C30.3333 50.2887 29.2887 51.3333 28 51.3333C26.7113 51.3333 25.6667 50.2887 25.6667 49V33.6332Z" fill="#CFCFCF" />
                                                </svg>

                                                <span className="mt-2 text-gray-600">Upload file</span>
                                                <input id="file-upload" type="file" className="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                    <div className="w-full">

                                        <div className="flex flex-col items-center justify-center w-full h-full">
                                            <label className="mb-2 font-semibold text-gray-700">Item thumbnail * ( Ratio 1:1 ) </label>
                                            <label
                                                htmlFor="file-upload"
                                                className="flex flex-col items-center justify-center w-52 h-52 p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
                                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2482 16.6671C14.1475 9.74904 20.4783 4.66666 28 4.66666C35.5217 4.66666 41.8525 9.74904 43.7518 16.6671C49.4342 17.9891 53.6667 23.0825 53.6667 29.1667C53.6667 33.6184 51.398 37.5393 47.9646 39.8375C46.8937 40.5544 45.4445 40.2673 44.7276 39.1965C44.0108 38.1256 44.2978 36.6763 45.3687 35.9595C47.5632 34.4905 49 31.9959 49 29.1667C49 24.9148 45.749 21.4196 41.5988 21.0352C40.5415 20.9373 39.6837 20.138 39.5115 19.0904C38.6017 13.5559 33.7917 9.33332 28 9.33332C22.2083 9.33332 17.3983 13.5559 16.4885 19.0904C16.3163 20.138 15.4584 20.9373 14.4012 21.0352C10.251 21.4196 7 24.9148 7 29.1667C7 31.9959 8.43675 34.4905 10.6313 35.9595C11.7022 36.6763 11.9892 38.1256 11.2723 39.1965C10.5555 40.2673 9.10628 40.5544 8.03539 39.8375C4.60197 37.5393 2.33333 33.6184 2.33333 29.1667C2.33333 23.0825 6.56576 17.9891 12.2482 16.6671ZM25.6667 33.6332L20.3166 38.9832C19.4054 39.8945 17.928 39.8945 17.0167 38.9832C16.1055 38.072 16.1055 36.5946 17.0167 35.6834L26.3501 26.3501C27.2613 25.4389 28.7387 25.4389 29.6499 26.3501L38.9832 35.6834C39.8945 36.5946 39.8945 38.072 38.9832 38.9832C38.072 39.8945 36.5946 39.8945 35.6834 38.9832L30.3333 33.6332V49C30.3333 50.2887 29.2887 51.3333 28 51.3333C26.7113 51.3333 25.6667 50.2887 25.6667 49V33.6332Z" fill="#CFCFCF" />
                                                </svg>

                                                <span className="mt-2 text-gray-600">Upload file</span>
                                                <input id="file-upload" type="file" className="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Box>
                </CardContent>

            </Card>
            <Card className="mt-6 rounded-[16px]">

                <CardContent>
                    <h2 className="text-[18px] font-semibold leading-title">Item details</h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                        <div className="p-2 ">
                            <Select
                                label="Store *"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Category *"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Sub category"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Suitable For"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Unit"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Maximum Purchase Quantity Limit"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <FormControlLabel className="mt-7" control={<Checkbox defaultChecked />} label="Is Basic Medicine" />
                        </div>
                        <div className="p-2 ">
                            <FormControlLabel className="mt-7" control={<Checkbox defaultChecked />} label="Is prescription required" />
                        </div>
                    </div>

                </CardContent>
            </Card>
            <Card className="mt-6 rounded-[16px]">

                <CardContent>
                    <h2 className="text-[18px] font-semibold leading-title">Price Information</h2>
                    <hr />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                        <div className="p-2 ">
                            <Input label="Price *" />
                        </div>
                        <div className="p-2 ">
                            <Input label="Total stock" />
                        </div>
                        <div className="p-2 ">
                            <Select
                                label="Discount type *"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                        <div className="p-2 ">
                            <Input label="Discount (%) *" />
                        </div>

                    </div>

                </CardContent>
            </Card>
            <Card className="mt-6 rounded-[16px]">

                <CardContent>
                    <h2 className="text-[18px] font-semibold leading-title">Attribute</h2>
                    <hr />
                    <div className="grid grid-cols-1 mt-6">
                        <div className="p-2 ">
                            <Select
                                label="Attribute"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                ]}
                            />
                        </div>
                    </div>

                </CardContent>
            </Card>
            <Card className="mt-6 rounded-[16px]">

                <CardContent>
                    <h2 className="text-[18px] font-semibold leading-title">Tag</h2>
                    <hr />
                    <div className="grid grid-cols-1 mt-6">
                        <div className="p-2 ">
                            <Input label="Attribute" />
                        </div>
                    </div>

                </CardContent>
            </Card>
            <div className="flex justify-end gap-3 mt-6 ">
                <Button variant="contained" color="inherit" className="py-3">Reset</Button>
                <Button variant="contained">Submit</Button>
            </div>
            <h5 className="text-center mt-6">© 2024. Telehealth thailand All rights reserved.</h5>
        </div>

    )
}

export default ItemUpdate