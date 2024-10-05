import { X } from 'lucide-react'; // Importing X icon
import { useState } from 'react';

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true); // Controls whether the alert is visible or not

  if (!showAlert) return null; // Return nothing if the alert is closed

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-foodpanda p-6 rounded-lg shadow-lg max-w-md mx-auto relative text-center">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={() => setShowAlert(false)}
        >
          <X size={24} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
        <p className="text-gray-700 mb-6">
          This project is a pixel-perfect clone of FoodPanda's website created for personal learning purposes. It is not affiliated with or endorsed by FoodPanda. All logos, trademarks, and brand names are the property of their respective owners.
        </p>
        <button
          onClick={() => setShowAlert(false)}
          className="bg-white text-foodP px-4 py-2 rounded-lg hover:bg-primary/70 focus:outline-none"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default Alert;
