import { useState, useEffect } from "react";

function PCards() {
  const packages = [
    {
      name: "Silver Package",
      color: "border-gray-300",
      features: [
        { name: "Basic Photography", price: 5000 },
        { name: "Basic Videoshoot", price: 5000 },
        { name: "Basic Video Editing", price: 2500 },
        { name: "Simple Color Correction With Album", price: 2500 },
      ],
    },
    {
      name: "Gold Package",
      color: "border-yellow-400",
      features: [
        { name: "DSLR Videoshoot", price: 7000 },
        { name: "Traditional Photoshoot", price: 5000 },
        { name: "Drone Shoot", price: 3500 },
        { name: "Advance Video Editing", price: 5000 },
        { name: "Color Grading", price: 3000 },
        { name: "Normal Reels", price: 1000 },
        { name: "Invitation Card", price: 500 },
      ],
    },
    {
      name: "Platinum Package",
      color: "border-purple-400",
      features: [
        { name: "Traditional Photoshoot", price: 5000 },
        { name: "Traditional Videoshoot", price: 5000 },
        { name: "Candid Photoshoot", price: 7000 },
        { name: "Cinematic Videoshoot", price: 8000 },
        { name: "Drone Shoot", price: 3500 },
        { name: "Cinematic Video Editing (High-level)", price: 8000 },
        { name: "Cinematic Reels", price: 2500 },
        { name: "Advance Invitation Card", price: 1000 },
        { name: "Pre-Wedding Shoot", price: 10000 },
      ],
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [days, setDays] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});
  const [showPriceInfoDropdown, setShowPriceInfoDropdown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = "hidden";
      const initialCheckedState = {};

      selectedPackage.features.forEach((feature) => {
        initialCheckedState[feature.name] = true;
      });
      setCheckedItems(initialCheckedState);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedPackage]);

  const handleCheckboxChange = (name) => {
    setCheckedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const calculatePrice = () => {
    let total = 0;
    if (selectedPackage) {
      selectedPackage.features.forEach((feature) => {
        if (checkedItems[feature.name]) {
          total += feature.price * days;
        }
      });
    }
    return total;
  };

  const totalPrice = calculatePrice();
  const isFormDisabled = !Object.values(checkedItems).some(Boolean);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const total = `₹${totalPrice.toLocaleString()}`;
    const services = Object.keys(checkedItems)
      .filter((key) => checkedItems[key])
      .join(", ");
    const selectedPackageName = selectedPackage ? selectedPackage.name : "";

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("services", `${selectedPackageName}: ${services}`);
    formData.append("days", days);
    formData.append("totalPrice", total);

    try {
      setShowOverlay(true);
      await fetch(
        "https://script.google.com/macros/s/AKfycbzKTwniiqTsIsPAd4l1Q464u0kYCV8AUHToF8Fb9gePM8TVi9EJuxsaT3t1Gq4RFO9xkg/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      setShowPopup(true);

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      setDays(1);
      setCheckedItems({});
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
      setShowOverlay(false);
    }
  };

  return (
    <section className="w-full py-25 px-2 sm:px-6 md:px-12 dark:bg-[#0c1216] transition-colors duration-300">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10 dark:text-white">
          Our Pricing Plans
        </h1>
        <p className="text-center text-black dark:text-white max-w-2xl mx-auto mb-16">
          Choose a package that suits your needs and budget. We offer flexible
          pricing options to ensure you get the best value for your investment.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between border border-t-4 ${pkg.color} dark:bg-[#0c1216] rounded-xl shadow-md p-6 md:p-8`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {pkg.name}
              </h2>
              <ul className="space-y-3 text-black dark:text-gray-200">
                {pkg.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="bg-[#FFC785] dark:bg-[#F2EAD3] h-6 w-6 p-3 flex items-center justify-center rounded-full text-[#2f2f2f]">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <button
                className="w-full py-3 px-5 bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] text-black rounded-full font-semibold shadow-md transition duration-200 cursor-pointer"
                onClick={() => setSelectedPackage(pkg)}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2">
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar bg-[#f0f8ff] dark:bg-[#0c1216] rounded-2xl shadow-2xl px-3 py-7 sm:p-7">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 z-10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            <h2 className="text-3xl font-bold my-6 text-gray-900 dark:text-white">
              {selectedPackage.name}
            </h2>

            <div className="border-t border-b my-8 p-2 text-black dark:text-white">
              <h1 className="font-bold text-lg sm:text-xl my-3">
                Important Note*
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-justify mb-2">
                This is not an online payment gateway. The form below is only
                for service inquiry and booking interest. Once you submit your
                details, our team will contact you shortly to discuss your
                requirements, confirm the final pricing, and proceed with
                offline payment and booking.
              </p>
            </div>

            {/* Show checkbox and items */}
            <ul className="space-y-4 text-gray-700 dark:text-gray-200">
              {selectedPackage.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm sm:text-base leading-relaxed"
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={checkedItems[item.name] || false}
                    onChange={() => handleCheckboxChange(item.name)}
                    className="h-5 w-5 rounded-lg"
                  />
                  {item.name}
                </li>
              ))}
            </ul>

            {/* Price Info and Form */}
            <div className="mt-8 space-y-4">
              {/* Dropdown */}
              <div className="custom-dropdown relative mb-4">
                <div
                  className="dropdown-button border w-full py-3 px-5 bg-[#f0f8ff] rounded-sm shadow-md cursor-pointer"
                  onClick={() =>
                    setShowPriceInfoDropdown(!showPriceInfoDropdown)
                  }
                >
                  View Price Information ▼
                </div>
                {showPriceInfoDropdown && (
                  <ul className="dropdown-list absolute top-full left-0 w-full border bg-[#f0f8ff] rounded-sm shadow-lg z-10 max-h-48 overflow-y-auto custom-scrollbar cursor-pointer py-5">
                    {selectedPackage.features.map((item, i) => (
                      <li
                        key={i}
                        className="py-2 px-5 border-b border-gray-200 last:border-none hover:bg-[#dee9f3] text-black "
                      >
                        {item.name} - ₹{item.price.toLocaleString()} (1 Day
                        Price)
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="days"
                  className="font-medium text-black dark:text-white mt-3"
                >
                  Select Days
                </label>
                <select
                  name="days"
                  id="days"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  disabled={isFormDisabled}
                  className="w-full py-3 px-5 border dark:border-white rounded-sm text-black dark:bg-[#f0f8ff] outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="price"
                  className="font-medium text-black dark:text-white mt-3"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="w-full py-3 px-5 border dark:border-white rounded-sm text-black dark:bg-[#f0f8ff] outline-none"
                  value={`₹${totalPrice.toLocaleString()}`}
                  disabled
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  disabled={isFormDisabled}
                  className="w-full py-3 px-5 mt-5 rounded-sm border dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white outline-none"
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  required
                  disabled={isFormDisabled}
                  className="w-full py-3 px-5 mt-3 rounded-sm border dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white outline-none"
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  required
                  disabled={isFormDisabled}
                  className="w-full py-3 px-5 mt-3 rounded-sm border dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-5 mt-5 bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] text-black rounded-full font-semibold shadow-md transition duration-200 cursor-pointer disabled:opacity-50"
                  disabled={isFormDisabled}
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* After submitting form show this blur overlay and thank you message pop up*/}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          {showPopup && (
            <div className="bg-white dark:bg-[#0c1216] p-8 rounded-xl shadow-2xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Thank You!
              </h2>
              <p className="text-black dark:text-white mb-6">
                Your inquiry has been sent successfully. We will reach out to
                you soon.
              </p>
              <button
                onClick={() => {
                  setShowOverlay(false);
                  setShowPopup(false);
                  setSelectedPackage(null);
                  window.location.href = "/";
                }}
                className="py-2 px-4 bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] text-black rounded-full font-semibold cursor-pointer"
              >
                OK
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default PCards;
