import React from 'react';

const Item = (props) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 m-4 transform transition-transform hover:scale-105 hover:shadow-xl rounded-xl bg-white shadow-lg hover:bg-gray-50">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <p className="text-xl font-semibold text-gray-800">{props.name}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-xl font-semibold text-green-500">
            ${props.new_price}
          </div>
          <div className="text-sm text-gray-400 line-through">
            ${props.old_price}
          </div>
        </div>
      </div>
      {props.hot && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Hot
        </div>
      )}
    </div>
  );
};

export default Item;
