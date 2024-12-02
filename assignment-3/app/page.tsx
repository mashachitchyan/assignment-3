import Image from "next/image";
import Header from "./components/Header";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import Hero from "./components/Hero";
import HomeMain from "./components/HomeMain";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeMain/>

    </div>
  );
}
