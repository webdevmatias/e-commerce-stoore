import React from "react";
import Item from "./Item";
import new_promo from "../assets/Frontend_Assets/new_promo"; // Corrija o caminho, se necessário

const PopularSection = () => {
  return (
    <div className="w-full my-8">
      {/* Título centralizado com espaçamento e estilo */}
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-2">POPULAR</h2>
        {/* Barra divisória abaixo do título */}
        <div className="w-1/4 mx-auto border-b-2 border-gray-200 mb-2"></div>
        <p className="text-sm text-gray-500 uppercase mb-8">
          Os Mais Comprados pelos Usuários!
        </p>
      </div>

      {/* Container para os itens, ajustado para criar uma linha responsiva e espaçada */}
      <div className="flex flex-wrap justify-center gap-6">
        {new_promo.slice(0, 6).map(
          (
            product // Seleciona apenas os 3 primeiros produtos
          ) => (
            <Item
              key={product.id}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              hot={true}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PopularSection;
