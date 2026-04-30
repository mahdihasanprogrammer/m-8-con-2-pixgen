"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";



export default function SignInPage() {

    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.signIn.email({
            email: e.target.email.value,
            password: e.target.password.value
        }, {
                onSuccess: () => {
                    router.push('/')
                    alert('sign in successfully')
                }
            })

        console.log('sign in data', data, error);
        if (error) {
            alert(error.message)
        }
    };

    const handleSignInWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Card className="border mx-auto w-full md:w-125 py-10 mt-5">
                <h1 className="text-center text-2xl font-bold">Sign in</h1>

                <Form className="flex w-full md:w-96 mx-auto flex-col gap-4" onSubmit={handleSignIn}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <div className=" space-y-3">
                        <p className="text-xl text-center">or</p>
                        <Separator />
                        <Button size="lg"
                          className={`bg-zinc-700 w-full `}
                            onClick={handleSignInWithGoogle}>
                            <FcGoogle className="size-5" />sign in with Google
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}