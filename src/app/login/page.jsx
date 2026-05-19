"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, Separator } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Login Successful");

        router.push("/");
    };
const handleGoogleSignin = async() => {
    await authClient.signIn.social({
        provider: "google"
    })

  }



    return (
        <div className="min-h-screen flex justify-center items-center">

           <Card>
             <form
                onSubmit={handleLogin}
                className="w-full max-w-md border p-10 rounded-2xl"
            >

                <h2 className="text-4xl font-bold text-center mb-8">
                    Login
                </h2>

                <div className="space-y-5">

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <button className="w-full bg-cyan-500 text-white py-4 rounded-lg">
                        Login
                    </button>
                </div>
            </form>
             <div className="flex justify-center items-center gap-3">
            <Separator/>
           <div className="whitespace-nowrap"> Or sign up with </div>
              <Separator/>
            </div>
        <div>
            <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-none'}><FcGoogle/> Sign in with Google</Button>
        </div>
           </Card>
        </div>
    );
};

export default LoginPage;