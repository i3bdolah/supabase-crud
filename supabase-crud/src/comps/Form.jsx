import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="text-2xl my-3">Create Product</h1>
      <div className="flex flex-col gap-2 my-3">
        <label>Product Name</label>
        <input type="text" className="w-[40%] h-8" />
      </div>
      <div className="flex flex-col gap-2 my-3">
        <label>Product Description</label>
        <input type="text" className="w-[40%] h-8" />
      </div>
      <button type="submit" className="bg-green-800 px-4 h-10 rounded-md">
        Create Product
      </button>
      <hr className="my-10 opacity-25" />
    </div>
  );
};

export default Form;
