import style from "../css/modules/AppHeader.module.css";

export function AppHeader() {
  return (
    <>
      <header
        className={
          style.header + " text-[20px] font-bold shadow-slate-700 rounded-b-lg"
        }
      >
        <div className="absolute top-[15px] drop-shadow-2xl text_shadow text-slate-300 ">
          world words
        </div>
        <div className="absolute top-[18px] text-[50px] text-slate-600">W</div>
      </header>
    </>
  );
}
