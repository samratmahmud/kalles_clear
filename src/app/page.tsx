import Advanced from "./home/Advanced";
import Demos from "./home/Demos";
import EcomRise from "./home/EcomRise";
import Features from "./home/Features";
import FeaturesCards from "./home/FeaturesCards";
import MasonaryCards from "./home/MasonaryCards";
import PackageBuilt from "./home/PackageBuilt";
import PagesGroup from "./home/PagesGroup";
import PremiumFeatures from "./home/PremiumFeatures";
import Responsive from "./home/Responsive";
import SpecialDeal from "./home/SpecialDeal";
import Header from "./home/header/Header";
import Performance from "./home/Performance";
import Experience from "./home/Experience";
import ExclusiveDeals from "./home/ExclusiveDeals";
import Explore from "./home/Explore";
import Agency from "./home/Agency";
import Support from "./home/Support ";

export default function Home() {
   return (
      <main className="pb-0.5 overflow-hidden">
         <Header />
         {/* <PremiumFeatures /> */}
         {/* <Demos /> */}
         {/* <PagesGroup /> */}
         {/* <MasonaryCards /> */}
         {/* <Responsive /> */}
         {/* <Features /> */}
         {/* <Advanced /> */}
         {/* <FeaturesCards /> */}
         {/* <EcomRise /> */}
         {/* <PackageBuilt /> */}
         {/* <SpecialDeal /> */}
         {/* <Performance /> */}
         {/* <Experience /> */}
         {/* <ExclusiveDeals /> */}
         <Explore />
         <Agency />
         {/* <Support /> */}
      </main>
   );
}
