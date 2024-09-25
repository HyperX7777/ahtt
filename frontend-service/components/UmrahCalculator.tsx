'use client';

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
    specialRequests: '', // Additional field for special requests
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.adults) newErrors.adults = 'Number of adults is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.checkinDate) newErrors.checkinDate = 'Check-in date is required';
    if (!formData.nights) newErrors.nights = 'Number of nights is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const whatsappLink = `https://wa.me/03364449880?text=Booking%20Details:%0AAdults:%20${formData.adults}%0AInfants:%20${formData.infants}%0AVisa%20Type:%20${formData.visaType}%0ARoom%20Type:%20${formData.roomType}%0ACity:%20${formData.city}%0AHotel:%20${formData.hotel}%0ARooms:%20${formData.rooms}%0ACheck-in%20Date:%20${formData.checkinDate}%0ANights:%20${formData.nights}%0ATransport:%20${formData.transport}%0ARoute:%20${formData.route}%0ASpecial%20Requests:%20${formData.specialRequests}`;
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
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
              {errors.adults && <p className="text-red-500 text-sm">{errors.adults}</p>}
            </div>

            <div>
              <label className="block text-gray-700">No. of Infants:</label>
              <input
                type="number"
                name="infants"
                value={formData.infants}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Visa Type:</label>
              <input
                type="text"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Room Type:</label>
              <input
                type="text"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
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
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Hotel:</label>
              <input
                type="text"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Rooms:</label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
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
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
              {errors.checkinDate && <p className="text-red-500 text-sm">{errors.checkinDate}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Nights:</label>
              <input
                type="number"
                name="nights"
                value={formData.nights}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
              {errors.nights && <p className="text-red-500 text-sm">{errors.nights}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Select Transport:</label>
              <select
                name="transport"
                value={formData.transport}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              >
                <option value="">Select Transport</option>
                <option value="Private Car">Private Car</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700">Select Route:</label>
              <input
                type="text"
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Special Requests:</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:border-green-500"
                placeholder="Any special requests or instructions"
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
