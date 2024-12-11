import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/Loder";
import { toast } from "react-toastify";
import CompanyImg from "../assets/website/company.jpg";
import Logo1 from "../assets/website/logo1.png";
import Logo2 from "../assets/website/logo2.png";
import Logo3 from "../assets/website/logo3.png";
import Logo4 from "../assets/website/logo4.png";
import Logo5 from "../assets/website/logo5.png";
import Logo6 from "../assets/website/logo6.png";
import { FaAt, FaArrowRight } from "react-icons/fa";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input className={`px-4 py-2 border rounded ${className}`} {...props} />
);

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}
    {...props}
  >
    {children}
  </div>
);

const values = [
  {
    title: "Do Big Things",
    description:
      "We dare to do big things, create big ideas, make big leaps, and take big risks.",
  },
  {
    title: "We Before Me",
    description:
      "We work as a team to get the best from each other. No one can move a mountain alone.",
  },
  {
    title: "Great Not Good",
    description:
      "We are obsessed with excellence and refuse to accept mediocrity or good enough.",
  },
  {
    title: "Transparency",
    description:
      "We believe in complete transparency as it's the only way to build true partnerships with our clients.",
  },
  {
    title: "Bullshit Free Design",
    description:
      "We create authentic designs based on your company's history and your customers' needs.",
  },
  {
    title: "Effects Matter",
    description:
      "Positivity creates opportunity. We are optimistic about the future and promote creativity.",
  },
];

const customers = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email to subscribe.", {
        position: "top-center",
      });
      return;
    }
    try {
      // chcek if email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.", {
          position: "top-center",
        });
        return;
      } else {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_Backend_URL}/subscribe-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        if (res.ok) {
          setEmail("");
          toast.success("You have successfully subscribed to our newsletter.", {
            position: "top-center",
          });
          setLoading(false);
        } else {
          toast.error(
            "An error occurred while sending your subscription email. Please try again.",
            {
              position: "top-center",
            }
          );
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "An error occurred while sending your subscription email. Please try again.",
        {
          position: "top-center",
        }
      );
    }
  };
  return (
    <>
      <div className="min-h-screen bg-background dark:bg-gray-950 dark:text-white duration-200">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About CorePac USA°
          </h1>
          <div className="flex items-center justify-center mb-8">
            <FaAt className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Helping small business grow big
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground dark:text-gray-300">
            <p className="mb-6">
              Welcome to CorePac USA°, where innovation meets precision in the
              world of printing and packaging. With a passion for excellence and
              a commitment to delivering top-notch services, CorePac USA° stands as
              your trusted partner in the realm of bespoke printing solutions.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Values 360°
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6"
                  data-aos="fade-up"
                  data-aos-delay={200 * index}
                >
                  <div className="text-3xl font-bold mb-4 text-blue-500">
                    {String(index + 1).padStart(2, "0")}.
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Image Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src={CompanyImg}
                alt="CorePac USA Building"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-16">Customers 360°</h2>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-muted-foreground dark:text-gray-300">
              We have worked with clients in a variety of industries for 5+
              years. We provide you with proven ideas that go beyond the norm in
              your industry and help you expand into new markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {customers.map((Logo, i) => (
                <div
                  key={i}
                  className="h-20 bg-white rounded-lg flex items-center justify-center"
                >
                  <img
                    src={Logo}
                    alt={`Client logo ${i + 1}`}
                    className="w-24 h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Set the Trends with CorePac USA°
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-muted-foreground dark:text-gray-300">
              Indeed, you are just a call away from us. Let&apos;s create
              revolutionary packaging products together.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow dark:bg-gray-800"
              />
              <Button className="flex items-center"
               onClick={handleSubscribe}
              >
                Subscribe
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      {loading && <Loader />}
    </>
  );
}
