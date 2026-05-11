"use client";

import { Button, FieldError, Input, Label, ListBox, Modal, TextArea, TextField, Select } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const EditModal = ({ destination }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());

        console.log("Updated Destination:", updatedData);

        const res = await fetch(`http://localhost:5000/destination/${destination._id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updatedData)
        })
        const data = await res.json()
        console.log(data);

    };

    return (
        <Modal>
            {/* Trigger Button */}
            <Button variant="secondary" className="flex items-center gap-2 px-4 py-2 rounded-xl border-gray-200 hover:bg-gray-50 transition-all">
                <BiEdit className="text-lg text-[#15A1BF]" />
                <span className="font-medium text-gray-700">Edit Destination</span>
            </Button>

            <Modal.Backdrop className="backdrop-blur-sm bg-black/30">
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-xl bg-white rounded-[2rem] shadow-2xl border-none overflow-hidden">
                        <Modal.CloseTrigger className="top-5 right-5 bg-gray-100 hover:bg-gray-200 rounded-full p-1" />

                        <Modal.Header className="bg-gray-50/50 p-8 border-b border-gray-100">
                            <div className="flex items-center gap-4">
                                <Modal.Icon className="bg-[#15A1BF]/10 text-[#15A1BF] p-3 rounded-2xl">
                                    <BiEdit size={24} />
                                </Modal.Icon>
                                <div>
                                    <Modal.Heading className="text-xl font-bold text-gray-900">Edit Destination</Modal.Heading>
                                    <p className="text-sm text-gray-500 mt-1">Update the information for this travel spot.</p>
                                </div>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-0">
                            <form onSubmit={onSubmit} className="p-8 space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Destination Name */}
                                    <div className="md:col-span-2">
                                        <TextField
                                            name="destinationName"
                                            isRequired
                                            defaultValue={destination?.destinationName}
                                            className="space-y-1.5"
                                        >
                                            <Label className="text-sm font-semibold text-gray-700">Destination Name</Label>
                                            <Input placeholder="e.g. Bali Paradise" className="rounded-xl border-gray-200 focus:ring-[#15A1BF]" />
                                            <FieldError className="text-xs text-red-500" />
                                        </TextField>
                                    </div>

                                    {/* Country */}
                                    <TextField
                                        name="country"
                                        isRequired
                                        defaultValue={destination?.country}
                                        className="space-y-1.5"
                                    >
                                        <Label className="text-sm font-semibold text-gray-700">Country</Label>
                                        <Input placeholder="e.g. Indonesia" className="rounded-xl border-gray-200" />
                                        <FieldError />
                                    </TextField>

                                    {/* Category */}
                                    <div className="space-y-1.5">
                                        <Label className="text-sm font-semibold text-gray-700">Category</Label>
                                        <Select
                                            name="category"
                                            isRequired
                                            defaultSelectedKey={destination?.category}
                                            className="w-full"
                                        >
                                            <Select.Trigger className="rounded-xl border-gray-200 w-full">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox className="rounded-xl shadow-lg">
                                                    {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map(cat => (
                                                        <ListBox.Item key={cat} id={cat} textValue={cat} className="px-4 py-2 hover:bg-[#15A1BF]/10 rounded-lg cursor-pointer">
                                                            {cat}
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    {/* Price */}
                                    <TextField
                                        name="price"
                                        type="number"
                                        isRequired
                                        defaultValue={destination?.price}
                                        className="space-y-1.5"
                                    >
                                        <Label className="text-sm font-semibold text-gray-700">Price (USD)</Label>
                                        <Input type="number" placeholder="1299" className="rounded-xl border-gray-200" />
                                    </TextField>

                                    {/* Duration */}
                                    <TextField
                                        name="duration"
                                        isRequired
                                        defaultValue={destination?.duration}
                                        className="space-y-1.5"
                                    >
                                        <Label className="text-sm font-semibold text-gray-700">Duration</Label>
                                        <Input placeholder="e.g. 7" className="rounded-xl border-gray-200" />
                                    </TextField>

                                    {/* Image URL */}
                                    <div className="md:col-span-2">
                                        <TextField
                                            name="imageUrl"
                                            isRequired
                                            defaultValue={destination?.imageUrl}
                                            className="space-y-1.5"
                                        >
                                            <Label className="text-sm font-semibold text-gray-700">Image URL</Label>
                                            <Input type="url" placeholder="https://example.com/photo.jpg" className="rounded-xl border-gray-200" />
                                        </TextField>
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-2">
                                        <TextField
                                            name="description"
                                            isRequired
                                            defaultValue={destination?.description}
                                            className="space-y-1.5"
                                        >
                                            <Label className="text-sm font-semibold text-gray-700">Description</Label>
                                            <TextArea placeholder="Describe the experience..." className="rounded-xl border-gray-200 min-h-[100px]" />
                                        </TextField>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4 flex gap-3">
                                    <Button slot="close" variant="secondary" className="flex-1 rounded-xl py-2.5">
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="flex-1 bg-[#15A1BF] hover:bg-[#128a9e] text-white rounded-xl py-2.5 font-bold shadow-lg transition-all">
                                        Update Destination
                                    </Button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditModal;