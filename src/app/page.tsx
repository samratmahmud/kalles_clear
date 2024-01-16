import Demos from "./home/Demos";
import MasonaryCards from "./home/MasonaryCards";
import PagesGroup from "./home/PagesGroup";
import PremiumFeatures from "./home/PremiumFeatures";
import Header from "./home/header/Header";

export default function Home() {
  return (
    <main className="pb-20">
      <Header />
      <PremiumFeatures />
      <Demos />
      <PagesGroup />
      <MasonaryCards />
    </main>
  );
}
