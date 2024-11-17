import React, { useState } from "react";
import { toast } from "react-toastify";
import Banner from "../../assets/website/orange-pattern.jpg";
import Loader from "../Loader/Loder";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {

    if (!email) {
      toast.error("Please enter your email to subscribe.",{
        position: "top-center",
      });
      return;
    }
    try {
      // chcek if email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.",{
          position: "top-center",
        });
        return;
      } else{
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_Backend_URL}/subscribe-email`, 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
          }
        )
        if (res.ok) {
          setEmail("");
          toast.success("You have successfully subscribed to our newsletter.",{
            position: "top-center",
          });
          setLoading(false);
        } else {
          toast.error("An error occurred while sending your subscription email. Please try again.",{
            position: "top-center",
          });
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending your subscription email. Please try again.",{
        position: "top-center",
      });
    }
  };

  return (
    <>
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex gap-4 items-center">
          <input
            data-aos="fade-up"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 text-black rounded"
          />
          <button
            onClick={handleSubscribe}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded shadow"
          >
            Subscribe
          </button>
          </div>
        </div>
      </div>
    </div>

    {loading && <Loader />}
    </>

  );
};

export default Subscribe;
