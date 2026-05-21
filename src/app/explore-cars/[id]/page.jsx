import BookingCard from "@/components/cards/BookingCard";
import api from "@/services/api";

const CarDetailsPage = async ({ params }) => {

  const { id } = await params;

  const res = await fetch(
    `https://drivefleet-server-psi-dusky.vercel.app/cars/${id}`,
    {
      cache: "no-store",
    }
  );

  const car = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={car.image}
          alt={car.carName}
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <div className="space-y-5">

          <h2 className="text-5xl font-bold">
            {car.carName}
          </h2>

          <p className="text-2xl text-cyan-500">
            ${car.price}/day
          </p>

          <p>{car.description}</p>

          <p>Type: {car.type}</p>

          <p>Seats: {car.seats}</p>

          <p>Location: {car.location}</p>

          <p>
            Booking Count:
            {car.booking_count || 0}
          </p>

          <BookingCard car={car} />

        </div>

      </div>

    </div>
  );
};

export default CarDetailsPage;