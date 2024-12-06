import Header from "@/app/components/Header";
import Accordion from "../components/Accordion";
import Contacts from "../components/Contacts";
import CallToAction from "../components/CallToAction";


export default function Home() {
    return (
      <div>
        <Header />
        <Contacts />
        <Accordion />
        <CallToAction heroText={"Build Stronger Connections, Faster"} paragraph={"The product will officially launch in March, 2025. Enjoy exclusive early access now"} />
      </div>
    );
  }
