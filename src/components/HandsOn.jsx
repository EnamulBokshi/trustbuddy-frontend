import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Play,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Video from "../assets/videos/videoplayback.mp4";
function HandsOn() {
  const [up, setUp] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const toggleDescription = () => {
    setUp(!up);
    setIsDescription(!isDescription);
  };
  return (
    <section className="py-20 px-5">
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold font-serif">Hands On</h1>
        <h2 className="text-center text-3xl text-gray-700">
          Every review has a story
        </h2>
      </div>
      <div className="p-5 rounded-lg bg-slate-100 md:flex justify-center gap-20 ">
        <video controls webkit-playsinline="" className="rounded-lg">
          <source src={Video} autoPlay type="video/mp4" />
        </video>
        <div className="flex flex-col justify-start gap-3 md:p-0 py-2">
          <div className="">
            <h2 className="text-3xl font-bold ">iPhone 16 pro max</h2>
            <h2 className="text-2xl  ">$1700</h2>
          </div>
          <div className="flex  gap-1 bg-violet-400 p-2  rounded items-center">
            <User className="text-white bg-transparent " />
            <div>
              <h3 className="text-white font-bold font-serif italic cursor-pointer">@trust_buddy</h3>
              <p className="text-gray-600">11-23-24</p>
            </div>
          </div>
          <p> After using 1 mont honest user expriences</p>
          <button className="py-3 rounded-lg bg-black/30 text-white">
            <Play className="inline" /> Watch Full Review
          </button>
          <div className="border border-slate-200 px-2 pb-5 rounded-lg bg-neutral-300">
            <button
              className="w-full flex justify-between items-center py-5 text-slate-800"
              onClick={toggleDescription}
            >
              <span>Decriptions</span>
              <span className="text-slate-800 transition-transform duration-300">
                {up ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>
            {isDescription && (
              <div className="px-5">
                <p className="text-slate-500">Descriptions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HandsOn;
