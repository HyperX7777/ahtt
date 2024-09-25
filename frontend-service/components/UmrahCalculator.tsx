'use client';  // Add this at the top of your file

import { useState } from 'react';

const UmrahCalculator = () => {
  const [formData, setFormData] = useState({
    adults: '',
    infants: '',
    visaType: '',
    roomType: '',
    city: '',
    hotel: '',
    rooms: '',
    checkinDate: '',
    nights: '',
    transport: '',
    route: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const whatsappLink = `https://wa.me/03364449880?text=Booking%20Details:%0AAdults:%20${formData.adults}%0AInfants:%20${formData.infants}%0AVisa%20Type:%20${formData.visaType}%0ARoom%20Type:%20${formData.roomType}%0ACity:%20${formData.city}%0AHotel:%20${formData.hotel}%0ARooms:%20${formData.rooms}%0ACheck-in%20Date:%20${formData.checkinDate}%0ANights:%20${formData.nights}%0ATransport:%20${formData.transport}%0ARoute:%20${formData.route}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Umrah Calculator</h2>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">No. of Adults:</label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">No. of Infants:</label>
              <input
                type="number"
                name="infants"
                value={formData.infants}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Visa Type:</label>
              <input
                type="text"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Room Type:</label>
              <input
                type="text"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Hotel:</label>
              <input
                type="text"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Rooms:</label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">Check-in Date:</label>
              <input
                type="date"
                name="checkinDate"
                value={formData.checkinDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Nights:</label>
              <input
                type="number"
                name="nights"
                value={formData.nights}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Select Transport:</label>
              <input
                type="text"
                name="transport"
                value={formData.transport}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Select Route:</label>
              <input
                type="text"
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahCalculator;
