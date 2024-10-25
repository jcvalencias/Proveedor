import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // matches the delay in main.js

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <img src="assets/images/loader.png" alt="loader" />
      </div>
    </div>
  );
};

export default Preloader;