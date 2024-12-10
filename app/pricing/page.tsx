import Header from "../components/Header";
import PackageQuiz from "../components/PackageQuiz";
import CallToAction from "../components/CallToAction";
import PricingCard from "../components/PricingCards";

export default function Home() {
  return (
    <div>
      <Header />
      <PricingCard />
      <PackageQuiz />
      <CallToAction
        heroText={"Build Stronger Connections, Faster"}
        paragraph={"The product will officially launch in March, 2025. Enjoy exclusive early access now"}
      />
    </div>
  );
}
