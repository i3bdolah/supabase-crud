import React from "react";

const Data = [
  {
    id: 1,
    name: "Smart Watch X",
    desc: "The Smart Watch X is packed with features to help you stay connected and on track throughout the day. This smartwatch features a touch screen display, fitness tracking, heart rate monitoring, and notification alerts. With a sleek design and durable construction, the Smart Watch X is a reliable and stylish choice for anyone in need of a smartwatch.",
  },
  {
    id: 2,
    name: "Eco-Friendly Water Bottle",
    desc: "The Eco-Friendly Water Bottle is the perfect accessory for anyone who wants to reduce their carbon footprint. This reusable water bottle is made from eco-friendly materials, and features a leak-proof design that makes it easy to take on the go. With a variety of colors and sizes to choose from, the Eco-Friendly Water Bottle is a great choice for anyone who wants to stay hydrated while doing their part for the environment.",
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    desc: "The Wireless Earbuds Pro are perfect for anyone who wants to enjoy their music without being tethered to their device. These powerful wireless earbuds feature advanced noise-cancellation technology, a long battery life, and a comfortable, secure fit. With their compact and stylish design, the Wireless Earbuds Pro are a great choice for anyone who wants to enjoy music, podcasts, and audiobooks on the go.",
  },
];

const ProductCard = ({ id, name, desc }) => {
  return (
    <div className="w-[30%] bg-black p-2 rounded-md my-5 hover:scale-105 transition flex flex-col justify-between">
      <div>
        <p className="font-bold opacity-25 mb-2">{id}</p>
        <p className="font-extrabold text-2xl">{name}</p>
      </div>
      <div>
        <p className="font-light my-3">{desc}</p>
      </div>
      <div className="flex justify-evenly my-3">
        <button className="bg-blue-800 px-5 py-1 rounded-md">Edit</button>
        <button className="bg-red-800 px-5 py-1 rounded-md">Delete</button>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="flex justify-between flex-wrap">
      {Data.map((e) => (
        <ProductCard id={e.id} name={e.name} desc={e.desc} />
      ))}
    </div>
  );
};

export default Product;
