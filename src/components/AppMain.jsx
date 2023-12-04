import { AppCarousel } from "./AppCaorousel";
import { CarouselItems } from "../../store";

export function AppMain() {
  return (
    <main className="vh100-header-footer relative">
      <AppCarousel currentIndex={0}></AppCarousel>
    </main>
  );
}
