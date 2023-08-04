import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.Chatbot.init({
        chatflowid: '92419b8d-39df-4ed8-a6ac-3315f90ce805',
        apiHost: 'https://sapiensia-mdlbsk.hf.space',
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id='chatbot'></div>;
};

export default Chatbot;
