"use client"
import { authClient } from '@/lib/auth-client';
import { UpdateProfile } from '@/lib/UpdateProfile';
import { Avatar,  Card, Skeleton } from '@heroui/react';


const ProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    console.log(data, 'profile')

    return (
        <div className='mt-12'>
            {isPending ? <div className="space-y-2">
                <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
                    <Skeleton animationType="shimmer" className="h-25 rounded-lg" />
                    <Skeleton animationType="shimmer" className="h-5 w-3/5 rounded-lg" />
                    <Skeleton animationType="shimmer" className="h-5 w-4/5 rounded-lg" />
                </div>
            </div>
                :
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
                        <UpdateProfile />
                    </div>
                </Card>
            }
        </div>
    );
};

export default ProfilePage;