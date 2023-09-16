import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white w-11/12 mt-[30px] px-5 py-1 font-bold text-2xl text-center rounded-lg">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center   gap-y-4 mt-[5px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
