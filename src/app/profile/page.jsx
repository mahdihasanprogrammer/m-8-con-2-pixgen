"use client"
import { authClient } from '@/lib/auth-client';
import { UpdateProfile } from '@/lib/UpdateProfile';
import { Avatar, Button, Card } from '@heroui/react';


const ProfilePage = () => {
    const { data } = authClient.useSession();
    const user = data?.user;
    console.log(data,'profile')

    return (
        <div className='mt-12'>
            <Card className='max-w-96 mx-auto '>
                <Avatar className='size-25 mx-auto'>
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div className='text-center'>
                    <p className='text-xl font-bold'>{user?.name}</p>
                    <p className='text-muted'>{user?.email}</p>
                    <UpdateProfile/>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;