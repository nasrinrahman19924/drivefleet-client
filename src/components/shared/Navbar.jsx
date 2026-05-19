"use client"

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Avatar } from "@heroui/react";

const Navbar = () => {
 
  

  const {
    data: session
  } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {

    await authClient.signOut();

    toast.success("Logout Successful");
  };

  return (
    <nav className="flex justify-between items-center p-5 border-b">

      <Link href="/">
        <h1 className="text-3xl font-bold text-cyan-500">
          DriveFleet
        </h1>
      </Link>

      <div className="flex gap-5 items-center">

        <Link href="/">Home</Link>

        <Link href="/cars">Explore Cars</Link>

        {
          session?.user ? (
            <>
              <Link href="/add-car">
                Add Car
              </Link>

              <Link href="/my-bookings">
                My Bookings
              </Link>
              <li>
                <Avatar>
                  <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                Login
              </Link>

              <Link href="/register">
                Register
              </Link>
            </>
          )
        }

      </div>
    </nav>
  );
};

export default Navbar;