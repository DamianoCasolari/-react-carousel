import style from "../css/modules/AppHeader.module.css";

export function AppHeader() {
  return (
    <>
      <header
        className={
          style.header + " text-[30px] font-bold shadow-slate-700 rounded-b-lg"
        }
      >
        <div className="absolute top-[15px] drop-shadow-2xl text_shadow">
          DevWords
        </div>
      </header>
    </>
  );
}
