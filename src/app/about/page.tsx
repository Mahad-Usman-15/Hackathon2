import Image from "next/image"
import pic from "../desktop-header-24.png"
import pic1 from "../team-1-user-1.jpg"
import pic2 from "../unsplash_vjMgqUkS8q8.png"
import pic3 from "../technology 1 (1).png"
import pic4 from "../media bg-cover.png"
export default function About(){
    return(
        <div>
          <div className="bg-white min-h-[475px] font-[sans-serif]">
  <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-gray-800 text-l md:text-l font-bold mb-6 md:!leading-[55px]">ABOUT OUR COMPANY</h3>
      <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">
       ABOUT US
      </h2>
      <p className="text-gray-800 text-base">
        Upgrade to our premium plan and supercharge your experience. Don't miss
        out!
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
        src={pic3}
        alt="Premium Benefits"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>






<div className="bg-gray-50 p-8 min-h-[350px] flex items-center justify-center font-sans">
  <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        15K
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Happy Customers</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        150K
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Revenue</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        15
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Engagement</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        100+
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">
        Server Uptime
      </p>
    </div>
  </div>
</div>
<div className="p-5 m-2 text-center">
<Image className="img" src={pic4} alt="aa" height={540} width={1000}/>
</div>



<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
<div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
        <img
          src="https://readymadeui.com/team-1.webp"
          className="w-full h-60 object-contain object-top bg-gray-200"
        />
        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
          <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Eiusmod commodo aliquip laboris qui anim non voluptate
              consectetur.
            </p>
          </div>
          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
        <img
          src="https://readymadeui.com/team-1.webp"
          className="w-full h-60 object-contain object-top bg-gray-200"
        />
        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
          <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Eiusmod commodo aliquip laboris qui anim non voluptate
              consectetur.
            </p>
          </div>
          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
        <img
          src="https://readymadeui.com/team-1.webp"
          className="w-full h-60 object-contain object-top bg-gray-200"
        />
        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
          <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Eiusmod commodo aliquip laboris qui anim non voluptate
              consectetur.
            </p>
          </div>
          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
</div>



<div className="bg-[#23A6F0] min-h-[475px] font-[sans-serif]">
  <div className="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">
        Try using our templates
      </h2>
      <p className="text-gray-800 text-base">
        Upgrade to our premium plan and supercharge your experience. Don't miss
        out!
      </p>
      <div className="mt-12 space-y-6">
        
        <button
          type="button"
          className="w-full px-4 py-2 text-base tracking-wider font-semibold outline-none border border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:text-blue-600 transition-all duration-300"
        >
          Try now
        </button>
      </div>
    </div>
    <div className="md:text-right max-md:mt-12 h-full">
      <Image
        src={pic2}
        alt="Premium Benefits"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


        </div>
    )
}