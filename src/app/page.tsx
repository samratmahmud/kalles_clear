import Advanced from "./home/Advanced";
import Demos from "./home/Demos";
import Features from "./home/Features";
import FeaturesCards from "./home/FeaturesCards";
import MasonaryCards from "./home/MasonaryCards";
import PagesGroup from "./home/PagesGroup";
import PremiumFeatures from "./home/PremiumFeatures";
import Responsive from "./home/Responsive";
import Header from "./home/header/Header";

export default function Home() {
   return (
      <main className="pb-20">
         <Header />
         {/* <PremiumFeatures /> */}
         {/* <Demos /> */}
         {/* <PagesGroup /> */}
         {/* <MasonaryCards /> */}
         {/* <Responsive /> */}
         {/* <Features /> */}
         <Advanced />
         <FeaturesCards />
      </main>
   );
}
