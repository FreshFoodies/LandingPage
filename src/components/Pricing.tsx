import React from 'react';

import config from '../config/index.json';
import YoutubeEmbed from './YoutubeEmbed';

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;

  return (
    <section className={`bg-background `} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 `}
        >
          <YoutubeEmbed embedId="_zIhEfCjfp4" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
