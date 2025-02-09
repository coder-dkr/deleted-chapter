import videoSource from "/lovey.webm"; 

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Content */}
    </div>
  );
};

export default VideoBackground;
