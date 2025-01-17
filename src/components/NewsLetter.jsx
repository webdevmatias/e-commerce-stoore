import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      // Substitua a URL abaixo pela URL da sua API de Newsletter
      const response = await fetch('https://sua-api.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Inscrição realizada com sucesso! Confira seu e-mail.');
        setEmail('');
      } else {
        setMessage('Ocorreu um erro. Tente novamente mais tarde.');
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-300 py-12 px-6 text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Get Exclusive Offers On Your Email
      </h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and stay updated
      </p>

      {/* Formulário */}
      <form onSubmit={handleSubscribe} className="flex justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-2/3 md:w-1/3 py-3 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Mensagem de feedback */}
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default NewsLetter;
