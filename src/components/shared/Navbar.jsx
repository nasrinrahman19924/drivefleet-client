"use client"

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const {
    data: session
  } = authClient.useSession();

  const user = session?.user;

  useEffect(() => {
    const setJwtCookie = async () => {
      if (user?.email) {
        try {
          await api.post("/jwt", {
            email: user.email
          });
        } catch (err) {
          console.log("JWT error:", err.message);
        }
      }
    };

    setJwtCookie();
  }, [user]);




  const router = useRouter();

  const handleLogout = async () => {

    await authClient.signOut();

    await api.post("/logout");

    toast.success("Logout Successful");

    router.push("/login");
  };

  return (
    <nav className="border-b sticky top-0 bg-white z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-5">

        {/* LEFT */}
        <div className="flex items-center gap-8">

          <Link
            href="/"
            className="text-3xl font-bold text-cyan-500"
          >
            DriveFleet
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/">Home</Link>

            <Link href="/explore-cars">
              Explore Cars
            </Link>

            <Link href="/add-car">
              Add Car
            </Link>
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          <HiMenuAlt3 />
        </button>

        {/* RIGHT */}
        {
          session?.user ? (

            <div className="dropdown dropdown-end">

              <img
                src={user?.image}
                alt="user"
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-cyan-500"
                tabIndex={0}
              />

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow bg-white rounded-box w-52 mt-3"
              >

                <li>
                  <Link href="/add-car">
                    Add Car
                  </Link>
                </li>

                <li>
                  <Link href="/my-cars">
                    My Cars
                  </Link>
                </li>

                <li>
                  <Link href="/my-bookings">
                    My Bookings
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </li>

              </ul>

            </div>

          ) : (

            <div className="flex gap-3">

              <Link
                href="/login"
                className="px-4 py-2 border rounded-lg"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>

            </div>

          )
        }

      </div>

      {/* MOBILE MENU */}
      {
        open && (
          <div className="md:hidden bg-white border-t">

            <div className="flex flex-col p-5 gap-5">

              <Link href="/">Home</Link>

              <Link href="/cars">
                Explore Cars
              </Link>

              <Link href="/add-car">
                Add Car
              </Link>

            </div>

          </div>
        )
      }

    </nav>
  );
};

export default Navbar;