import Image from "next/image"
import pict from "../carousel-inner (1).png"
import piic2 from "../technology 1.png"
export default function Contact(){
    return(
        <div>
 <div className="bg-white min-h-[475px] font-[sans-serif]">
  <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-gray-800 text-l md:text-l font-bold mb-6 md:!leading-[55px]">ABOUT OUR COMPANY</h3>
      <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">
       Contact US
      </h2>
      <p className="text-gray-800 text-base">
        Get in touch Today
      </p>
      <div className="mt-12 space-y-6">
        
        <button
          type="button"
          className="w-full px-4 py-2 text-base tracking-wider font-semibold outline-none border border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 transition-all duration-300"
        >
          GET QUOTE NOW
        </button>
      </div>
    </div>
    <div className="md:text-right max-md:mt-12 h-full">
      <Image
        src={piic2}
        alt="Premium Benefits"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>







<div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wide">Visit Our Office</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          We help small businesses <br /> with big ideas
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white text-black  shadow-md flex flex-col items-center p-6 text-center flex-1">
          <div className="text-blue-500 text-4xl mb-4">📞</div>
          <p className="text-sm">georgia.young@example.com</p>
          <p className="text-sm">georgia.young@ple.com</p>
          <p className="font-semibold mt-4">Get Support</p>
          <button className="mt-4 px-4 py-2 bg-bwhite text-blue-500 rounded-full hover:bg-blue-600 transition">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#252B42] text-white  shadow-md flex flex-col items-center p-6 text-center flex-1">
          <div className="text-blue-300 text-4xl mb-4">📍</div>
          <p className="text-sm">georgia.young@example.com</p>
          <p className="text-sm">georgia.young@ple.com</p>
          <p className="font-semibold mt-4">Get Support</p>
          <button className="mt-4 px-4 py-2 bg-[#252B42] border-blue-800 text-blue-900 rounded-full hover:bg-blue-400 transition">
            Submit Request
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black  shadow-md flex flex-col items-center p-6 text-center flex-1">
          <div className="text-blue-500 text-4xl mb-4">✉️</div>
          <p className="text-sm">georgia.young@example.com</p>
          <p className="text-sm">georgia.young@ple.com</p>
          <p className="font-semibold mt-4">Get Support</p>
          <button className="mt-4 px-4 py-2 bg-bwhite text-blue-500 rounded-full hover:bg-blue-600 transition">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  






<div className="bg-white p-10font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <p>WE CAN'T WAIT TO MEET YOU</p>
    <h2 className="text-gray-800 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-blue-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">
      Try using our templates
    </h2>
    
    <div className="flex max-sm:flex-col justify-center gap-6 mt-12">
      <button
        type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-blue-600 bg-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300"
      >
        Try now
      </button>
      
    </div>
  </div>
</div>

        </div>
    )
}
