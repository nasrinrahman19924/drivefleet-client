"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, Separator } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {

    const router = useRouter();

    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.photo.value;
        const password = form.password.value;

        setError("");

        // password validation

        if (password.length < 6) {
            return setError("Password must be 6 characters");
        }

        if (!/[A-Z]/.test(password)) {
            return setError("Must contain uppercase letter");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Must contain lowercase letter");
        }

        // better auth signup

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Registration Successful");

        router.push("/login");
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
                onSubmit={handleRegister}
                className="w-full max-w-md border p-10 rounded-2xl"
            >

                <h2 className="text-4xl font-bold text-center mb-8">
                    Register
                </h2>

                <div className="space-y-5">

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                    />

                    <input
                        className="w-full border p-4 rounded-lg"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    {
                        error && (
                            <p className="text-red-500">
                                {error}
                            </p>
                        )
                    }

                    <button className="w-full bg-cyan-500 text-white py-4 rounded-lg">
                        Register
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

export default RegisterPage;