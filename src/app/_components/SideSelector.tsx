import { sides, useAppStore } from "@/stores/appstore";

export default function SideSelector() {
  const update = useAppStore((state) => state.update);

  return (
    <>
      {sides.map((s) => (
        <div key={s} className="group relative">
          <button
            className="w-full  border-white py-2 font-semibold uppercase"
            onClick={() => update({ activeSide: s })}
          >
            {s}
          </button>
          <div>
            <div className="absolute left-0 top-0  h-[50%] w-[50%] transform border-l-2 border-t-2 border-white opacity-100 transition-all group-hover:left-[-5px] group-hover:top-[-3px] group-hover:h-[10px] group-hover:w-[10px]"></div>
            <div className="absolute right-0 top-0 h-[50%] w-[50%] border-r-2 border-t-2 border-white opacity-100 transition-all group-hover:right-[-3px] group-hover:top-[-3px] group-hover:h-[10px] group-hover:w-[10px]"></div>
            <div className="absolute bottom-0 left-0 h-[50%] w-[50%] border-b-2 border-l-2 border-white opacity-100 transition-all group-hover:bottom-[-3px] group-hover:left-[-3px] group-hover:h-[10px] group-hover:w-[10px]"></div>
            <div className="absolute bottom-0 right-0 h-[50%] w-[50%] border-b-2 border-r-2 border-white opacity-100 transition-all group-hover:bottom-[-3px] group-hover:right-[-3px] group-hover:h-[10px] group-hover:w-[10px]"></div>
          </div>
        </div>
      ))}
    </>
  );
}
