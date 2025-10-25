import React from "react";
import Card from "./Card";

const HeroCards = () => {
  return (
    <div className="flex justify-between gap-4  py-16">
      <Card backgroundColor="bg-gradient-to-r from-purple-500 to-purple-800"></Card>
      <Card backgroundColor="bg-gradient-to-r from-green-500 to-green-800"></Card>
    </div>
  );
};

export default HeroCards;
