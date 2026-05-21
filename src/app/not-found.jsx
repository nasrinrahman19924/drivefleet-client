import Link from "next/link";

const NotFoundPage = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h2 className="text-7xl font-bold text-cyan-500">
        404
      </h2>

      <p className="text-2xl mt-5">
        Page Not Found
      </p>

      <Link
        href="/"
        className="bg-cyan-500 text-white px-6 py-3 rounded-xl mt-8"
      >
        Back To Home
      </Link>

    </div>
  );
};

export default NotFoundPage;