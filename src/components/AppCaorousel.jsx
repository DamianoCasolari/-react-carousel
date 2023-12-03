import { useState, useEffect } from "react";
import { CarouselItems } from "../../store";

export function AppCarousel({ currentIndex }) {
  // Crete path for image not public
  function getImgUrl(name) {
    return new URL("../assets/imgPost/" + name, import.meta.url).href;
  }
  //create state and assign props if exist
  const [stateIndex, setIndex] = useState(currentIndex || 0);

  //function to assign first active class
  function assignActive(index) {
    if (stateIndex == index) {
      return "active";
    }
  }
  //function to assign first active class
  function assignOpacity(index) {
    if (stateIndex == index) {
      return " opacity-100";
    } else {
      return " opacity-0";
    }
  }
  //function to assign active class with click
  function changeIndex(index) {
    return () => setIndex(index);
  }

  //function to increment currentIndex
  function incrementIndex() {
    if (stateIndex >= CarouselItems.length - 1) {
      setIndex(0);
    } else {
      setIndex((stateIndex) => stateIndex + 1);
    }
  }
  //function to decrement currentIndex
  function decrementIndex() {
    if (stateIndex == 0) {
      setIndex(CarouselItems.length - 1);
    } else {
      setIndex((stateIndex) => stateIndex - 1);
    }
  }
  //function to increment/decrement currentIndex with keyboard
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        decrementIndex();
      } else if (event.key === "ArrowRight") {
        incrementIndex();
      } else if (event.key === " ") {
        incrementIndex();
      }
      console.log(event.key);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [stateIndex, incrementIndex, decrementIndex]);

  //increment or decrement with arrow
  //   setTimeout(() => {
  //     if (stateIndex >= CarouselItems.length - 1) {
  //       setIndex(0);
  //       console.log(stateIndex);
  //     } else {
  //       setIndex((stateIndex) => stateIndex + 1);
  //       console.log(stateIndex);
  //     }
  //   }, 1000);
  //create autoplay

  return (
    <>
      {CarouselItems.map((item, index) => {
        return (
          <div key={item.id} className="main_image w-full h-5/6 absolute p-4">
            <img
              src={getImgUrl(item.image)}
              className={
                "w-full h-full object-cover duration-75" + assignOpacity(index)
              }
              alt="Main_carousel_image"
            />
          </div>
        );
      })}

      <div className="Carousel flex items-end justify-center h-full">
        {CarouselItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                "card flex items-center justify-center w-10/12 md:w-6/12 h-2/6 " +
                assignActive(index)
              }
              onClick={changeIndex(index)}
            >
              <img
                src={getImgUrl(item.image)}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between ">
        <button
          className="left hover:opacity-50 duration-300 bottom-[30px] left-0 fixed"
          onClick={decrementIndex}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </button>
        <button
          className="right hover:opacity-50 duration-300 bottom-[30px] right-0 fixed"
          onClick={incrementIndex}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </button>
      </div>
    </>
  );
}

// --------
// accordion

// import style from "../css/modules/Accordion.module.css";

// /**
//  * @param { { structure: {title: string, content: string}[] } } param
//  * @returns
//  */
// export default function Accordion({ structure, index: externalIndex }) {
//   // Solo una voce dell'accordio può essere aperta alla volta
//   const [activeEntry, setActiveEntry] = useState(externalIndex ?? 0);

//   function isActive(index) {
//     if (index === (externalIndex || activeEntry)) {
//       return " " + style.active;
//     }
//   }

//   function expandEntry(nuovoIndice) {
//     setActiveEntry(nuovoIndice);
//   }

//   return (
//     <div className="py-8 text-left">
//       {structure.map((entry, i) => {
//         return (
//           <div key={i} className={style["accordion-entry"] + isActive(i)}>
//             <div
//               className={style["accordion-header"]}
//               onClick={() => expandEntry(i)}
//             >
//               {/* <div className={style['accordion-header']} onClick={() => setActiveEntry(i)}> */}
//               <h2>{entry.title}</h2>

//               <i
//                 className={`fa-solid fa-${
//                   i === (externalIndex || activeEntry) ? "minus" : "plus"
//                 } `}
//               ></i>
//             </div>
//             <div className={style["accordion-body"]}>
//               <p>{entry.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // ------------------------------------
// App.js
// import { useState } from "react";
// import Accordion from "./components/Accordion";

// function App() {
//   // const counterState = useState(0);
//   // const counter = counterState[0];
//   // const setCounter = counterState[1];
//   const [counter, setCounter] = useState(2);
//   const accordionStructure = [
//     {
//       title: "Titolo 1",
//       content: "Contenuto 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
//     }, {
//       title: "Titolo 2",
//       content: "Contenuto 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
//     }, {
//       title: "Titolo 3",
//       content: "Contenuto 3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
//     }, {
//       title: "Titolo 4",
//       content: "Contenuto 4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro harum, ullam dolores quis unde rerum? Labore esse illo sapiente libero provident. Quis facere aspernatur rerum, debitis quam officiis? Odio."
//     }
//   ];

//   console.log("valore counter", counter);

//   /* const increment = () => {
//     const nuovoValore = counter + 1;

//     setCounter(nuovoValore);

//     console.log("valore dopo increment", nuovoValore)
//   }; */

//   const increment = () => {
//     // counter ora che valore ha ? 9

//     // setCounter(10);

//     setCounter(currentValue => currentValue + 1);
//     // setCounter((currentValue) => currentValue + 1);
//   };

//   const decrement = () => {

//     setCounter((currentValue) => {
//       const nuovoValore = currentValue - 1;
//       console.log("valore dopo decrement", nuovoValore);

//       return nuovoValore;
//     });

//   };

//   return (
//     <div className="container mx-auto text-center py-8">
//       <h1 className="text-2xl mb-4">Valore contatore: {counter}</h1>
//       <div className="flex gap-4 justify-center">
//         <button className="bg-blue-400 text-xl px-4 py-3" onClick={increment}>+ Incrementa</button>
//         <button className="bg-red-400 text-xl px-4 py-3" onClick={decrement}>- Decrementa</button>
//       </div>

//       <Accordion structure={accordionStructure} index={counter}></Accordion>
//     </div>
//   );
// }

// export default App;

// // ------------------------
