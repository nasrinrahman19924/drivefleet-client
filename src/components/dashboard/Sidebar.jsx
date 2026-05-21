"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname();

  const links = [
    {
      name: "Add Car",
      path: "/add-car",
    },
    {
      name: "My Cars",
      path: "/my-cars",
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-cyan-500 text-white p-8">

      <h2 className="text-4xl font-bold mb-10">
        DriveFleet
      </h2>

      <div className="flex flex-col gap-4">

        {
          links.map((link) => (

            <Link
              key={link.path}
              href={link.path}
              className={`
                px-5 py-3 rounded-xl transition-all
                ${pathname === link.path
                  ? "bg-white text-cyan-500"
                  : "hover:bg-cyan-600"
                }
              `}
            >
              {link.name}
            </Link>

          ))
        }

      </div>

    </div>
  );
};

export default Sidebar;