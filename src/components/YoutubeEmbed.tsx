import React from 'react';

import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }: { embedId: String }) => (
  <div className="video-responsive aspect-video">
    <iframe
      width="relative"
      height="relative"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
