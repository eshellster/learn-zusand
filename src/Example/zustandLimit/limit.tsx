// https://ichi.pro/ko/zustandlo-sangtae-gwanli-ban-eung-202405822811111
import React from "react";
import appleIcon from "./apple-gray.svg";
import samsungIcon from "./samsung.svg";
import "./App.css";
import { useCountryStore, useStore } from "./store";

export const Limit = () => {
  return (
    <div>
      <Dollars />
      <Broke />
      <Country />
      <div className="buttons">
        <BrokeHandle />
        <IncreaseDallars />
        <DecreaseDollars />
      </div>
      <FullPage company="Apple" />
    </div>
  );
};

function Dollars() {
  const dollars = useStore((state) => state.dollars);
  return <p> You currently have: {dollars} </p>;
}

function IncreaseDallars() {
  const increaseDollars = useStore((state) => state.increaseDollars);

  return (
    <button
      onClick={() => {
        increaseDollars();
      }}
    >
      +
    </button>
  );
}

function DecreaseDollars() {
  const decreaseDollars = useStore((state) => state.decreaseDollars);
  return (
    <button
      onClick={() => {
        decreaseDollars();
      }}
    >
      {" "}
      -
    </button>
  );
}

function Broke() {
  const broke = useStore((state) => state.broke);
  return <p> {broke ? "You are broke" : "You are not broke"} </p>;
}

function BrokeHandle() {
  const broke = useStore((state) => state.broke);
  const setBroke = useStore((state) => state.setBroke);
  return (
    <button
      onClick={() => {
        setBroke(!broke);
      }}
    >
      {" "}
      Change
    </button>
  );
}

function Country() {
  const country = useCountryStore((state) => state.country);
  return <p> You currently live in {country} </p>;
}

function RenderIcon({ company }: { company: string }) {
  return <>{company === "Apple" ? <AppleIcon /> : <SamsungIcon />}</>;
}

function Message({ firm }: { firm: string }) {
  return (
    <>
      <p> your company is {firm} </p>
    </>
  );
}
function FullPage({ company }: { company: string }) {
  return (
    <>
      <RenderIcon company={company} />
      <Message firm={company} />
    </>
  );
}
function AppleIcon() {
  return <img src={appleIcon} alt="logo" />;
}
function SamsungIcon() {
  return <img src={samsungIcon} alt="logo" />;
}
