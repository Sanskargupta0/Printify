import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "Print360 exceeded our expectations with their top-notch printing services! From packaging designs to promotional materials, they delivered everything with impeccable quality and precision.",
    img: "https://picsum.photos/201/201",
  },
  {
    id: 2,
    name: "Michael Smith",
    text: "Working with Print360 was a seamless experience. Their customer support is exceptional, and they truly listened to our unique needs. We were thrilled with the final product!",
    img: "https://picsum.photos/202/202",
  },
  {
    id: 3,
    name: "Priya Patel",
    text: "Fast, reliable, and creative! Print360 brought our branding vision to life with stunning custom designs. Highly recommended for anyone serious about their business image.",
    img: "https://picsum.photos/203/203",
  },
  {
    id: 4,
    name: "James Brown",
    text: "From concept to final print, the team at Print360 showcased unmatched expertise. Their transparent communication and attention to detail made all the difference.",
    img: "https://picsum.photos/204/204",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    text: "The quality and creativity Print360 brought to our project were outstanding. We couldn't have asked for a better partner to handle our business marketing materials.",
    img: "https://picsum.photos/205/205",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary py-2">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 py-2">
            At Print360, we take pride in bringing visions to life with
            precision, creativity, and exceptional service. Here’s what our
            satisfied customers have to say about partnering with us.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in" className="h-[450px]">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
