import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export const TextoCartas = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [' Tu guía astral', ' Tus respuestas aquí', ' Tu futuro ahora!'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar:''
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
      Consulta nuestro Tarot,  <span ref={typedRef} />
    </h1>
  );
};

