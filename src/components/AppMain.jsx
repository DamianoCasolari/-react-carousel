import { AppCarousel } from "./AppCaorousel";
import { CarouselItems } from "../../store";

export function AppMain() {
  //   let currentIndex = 0;
  //   setInterval(() => {
  //     if (currentIndex >= CarouselItems.length - 1) {
  //       currentIndex = 0;
  //       console.log(currentIndex);
  //     } else {
  //       currentIndex += 1;
  //       console.log(currentIndex);
  //     }
  //   }, 1000);

  return (
    <main className="vh100-header-footer relative">
      <AppCarousel currentIndex={0}></AppCarousel>
    </main>
  );
}
