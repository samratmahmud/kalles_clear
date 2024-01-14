import Demos from "./home/Demos";
import PremiumFeatures from "./home/PremiumFeatures";
import Header from "./home/header/Header";

export default function Home() {
  return (
    <main className="pb-20">
      <Header />
      <PremiumFeatures />
      <Demos />
    </main>
  );
}
