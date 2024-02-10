import Image from "next/image";
import React from "react";

function DownloadApp() {
  return (
    <section className="bg-[#D9D9D9] p-12 w-[80%] flex flex-col items-center justify-center text-black md:flex-row md:justify-around m-auto rounded-2xl">
      <div className="flex flex-col xs:flex-row justify-center items-center mb-8 md:mb-0 md:mr-4">
        <Image
          src="/downloadApp/phone.png"
          alt="Yimbs open on a phone"
          width={300}
          height={300}
          className="min-w-[155px] min-h-[300px] w-[50%] h-[80%] mx-auto block mb-6 xs:mb-0 xs:mr-12 md:mr-3"
        />
        <Image
          src="/downloadApp/scanME.png"
          alt="Yimbs open on a phone"
          width={500}
          height={500}
          className="h-[30%] w-[30%] min-h-[150px] min-w-[150px] mx-auto block"
        />
      </div>

      <div>
        <h4 className="text-xl md:text-3xl lg:text-4xl m-2">
          - Download Yimbs App
        </h4>
        <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold m-2">
          Instant, Easy & Everywhere
        </h4>
        <div className="m-2 flex flex-col md:flex-row items-center justify-center">
          <input
            className="bg-white rounded-full px-3 py-1 mb-2 focus:outline-none w-[60%] md:rounded-e md:mb-0"
            type="text"
          />
          <button className="bg-black px-3 py-1 w-[60%] text-white rounded-full hover:bg-gray-600 md:w-auto md:rounded-s">
            Get The App
          </button>
        </div>
        <h4 className="m-2">You will Fet an SMS with the App Download Link</h4>
      </div>
    </section>
  );
}

export default DownloadApp;
