import { useState } from "react";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value,
    };

    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyBjSrWRzyI4sLNMcZlbnoEVfsHoKgYQ8iXXV8TUiVn2WQJa8iDEOX9KX1T8oXDDE9nZw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "Success") {
        alert("Message sent successfully!");
        form.reset();
        window.location.href = "/";
      } else {
        alert("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact-form"
      className="w-full py-20 pb-30 sm:px-6 md:px-14 dark:bg-[#0c1216] transition-colors duration-300"
    >
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-50 pointer-events-auto">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          <p className="text-white mt-4 text-lg font-semibold">Sending...</p>
        </div>
      )}

      <div className="w-full text-center py-10">
        <h1 className="text-4xl font-bold dark:text-white">Contact us</h1>
      </div>

      <div className="w-full flex flex-col gap-5 mt-5 p-1.5 lg:flex-row ">
        <div className="w-full max-w-5xl p-5 py-10 sm:p-12 rounded-lg shadow-lg flex flex-col items-center justify-center gap-9 lg:gap-15 border dark:border-amber-50">
          <div className="flex items-center w-full gap-3">
            <h1 className="bg-[#FFC785] dark:bg-[#F2EAD3] p-2 sm:p-3 rounded-full text-2xl flex items-center justify-center shadow-md">
              <i className="fa-solid fa-location-dot text-[#2f2f2f]"></i>
            </h1>
            <div>
              <h2 className="font-bold text-lg sm:text-xl dark:text-white">
                Our Location
              </h2>
              <p className="mt-2 text-sm sm:text-base dark:text-white">
                At: Bhalusana, Satlasana, Dis: Mehsana, Gujarat - 384330
              </p>
            </div>
          </div>

          <hr className="w-full border-0 h-px mx-auto bg-black dark:bg-amber-50" />

          <div className="flex items-center w-full gap-3">
            <h1 className="bg-[#FFC785] dark:bg-[#F2EAD3] p-2 sm:p-3 rounded-full text-2xl flex items-center justify-center shadow-md">
              <i className="fa-solid fa-phone text-[#2f2f2f]"></i>
            </h1>
            <div>
              <h2 className="font-bold text-lg sm:text-xl dark:text-white">
                Call us
              </h2>
              <div className="md:flex md:gap-4">
                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  +91 76989 17734 (Maulik Prajapati)
                </p>
                <p className="mt-2 text-sm sm:text-base dark:text-white">
                  +91 78638 48293 (Komit Prajapati)
                </p>
              </div>
            </div>
          </div>

          <hr className="w-full border-0 h-px mx-auto bg-black dark:bg-amber-50" />

          <div className="flex items-center w-full gap-3">
            <h1 className="bg-[#FFC785] dark:bg-[#F2EAD3] p-2 sm:p-3 rounded-full text-2xl flex items-center justify-center shadow-md">
              <i className="fa-solid fa-envelope text-[#2f2f2f]"></i>
            </h1>
            <div>
              <h2 className="font-bold text-lg sm:text-xl dark:text-white">
                Email us
              </h2>
              <p className="mt-2 text-sm sm:text-base dark:text-white">
                neelkanthstudio360@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-2xl dark:text-white">OR</p>
        </div>

        <div className="w-full max-w-5xl p-2 py-8 sm:p-10 rounded-lg shadow-lg border dark:border-amber-50">
          <form
            className="p-2 rounded-lg flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-lg font-medium dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="p-4 w-full border rounded-sm shadow-sm outline-none dark:text-white dark:border-amber-50 dark:placeholder:text-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-lg font-medium dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                required
                className="p-4 w-full border rounded-sm shadow-sm outline-none dark:text-white dark:border-amber-50 dark:placeholder:text-white"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="address"
                className="text-lg font-medium dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Your Address"
                required
                className="p-4 w-full border rounded-sm shadow-sm outline-none dark:text-white dark:border-amber-50 dark:placeholder:text-white"
              />
            </div>

            <div className="flex flex-col gap-1.5 mt-3">
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Your Message"
                className="p-4 w-full border rounded-sm shadow-sm outline-none dark:text-white dark:border-amber-50 dark:placeholder:text-white"
                rows={4}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center bg-[#FFC785] hover:bg-[#f7ad59] dark:bg-[#F2EAD3] dark:hover:bg-[#faedc6] dark:text-black duration-200 text-black cursor-pointer p-3 rounded-lg font-bold active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
