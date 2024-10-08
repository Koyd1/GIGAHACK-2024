"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header/Header";
import Challenges from "@/app/components/Challenges/Challenges";
import Preloader from "@/app/components/Preloader/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader isLoading={isLoading} />

      {!isLoading && (
        <div className="mb-10">
          <Header />
          <Challenges />
        </div>
      )}
    </div>
  );
};

export default App;
