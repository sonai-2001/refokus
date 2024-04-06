import React from "react";
function Nich() {
  return (
    <div className="w-full mt-12">
      <div className="max-w-screen-lg mx-auto  flex gap-10  ">
        <div className="w-1/2 flex flex-col justify-between py-4 px-2">
          <h1 className="text-9xl tracking-tight">refokus.</h1>
          <div className="flex gap-5 text-xs mt-5 font-light text-zinc-500">
            {["privacy policy", "cookie policy", "impressum", "terms"].map(
              (elem) => (
                <span>{elem}</span>
              )
            )}
          </div>
        </div>
        <div className="w-1/2 flex gap-10">
          <div className="  text-zinc-500">
            <h1 className="mb-5">Socials</h1>
            {["instragram", "twiter", "Linkedin"].map((elem) => (
              <a className="block">{elem}</a>
            ))}
          </div>
          <div className="  text-zinc-500">
            <h1 className="mb-5">sitemap</h1>
            {["home", "work", "carrers", "contacts"].map((elem) => (
              <a className="flex flex-col">{elem}</a>
            ))}
          </div>
          <div className="flex flex-col items-center mb-10">
            <p className="text-sm">
              refokus is a primary organization where you can create your
              digital content for your working purpose. Reokus provide you a
              interactive digital platform{" "}
            </p>
            <div className="text-xs bg-violet-600 w-fit py-1 mt-5">
              Enterprise Partner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nich;
