"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { authClient } from "./auth-client";

export function UpdateProfile() {

const handleUpdateProfile=async(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
        name:name,
        image:image
    })

}

    return (
        <Modal>
            <Button className={'mt-5'} variant="secondary"> <BiEdit /> Update profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleUpdateProfile}
                                className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label> Image url</Label>
                                        <Input placeholder="image url" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button 
                                         type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}