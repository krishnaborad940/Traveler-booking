export const bookingService = async (flightData) => {
    return fetch('http://localhost:8001/showall', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flightData),
    }).then((res) => res.json());
  };