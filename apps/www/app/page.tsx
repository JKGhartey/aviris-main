import { Background } from "~/components/background";
import {
  Hero,
  Benefits,
  Tools,
  Features,
  Templates,
} from "~/components/sections";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <main className="flex-1">
        <Background />
        <Hero />
        <Benefits />
        <Tools />
        <Features />
        <Templates />
      </main>
    </div>
  );
}
