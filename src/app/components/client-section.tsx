"use client";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: <span>Khit Silk & Fabric</span>,
    image: "/client08.png",
  },
  {
    id: 2,
    name: (
      <span>
        Smile Lady <br />
        BKK Fashion World
      </span>
    ),
    image: "/client02.png",
  },
  {
    id: 3,
    name: (
      <span>
        UEDC Myanmar တံခါး၊ <br />
        ကြွေပြားနှင့် အိမ်ဆောက်ပစ္စည်း <br />
        အမျိုးမျိုး ဖြန့်ချီရေး
      </span>
    ),
    image: "/client03.png",
  },
  {
    id: 4,
    name: (
      <span>
        <span className="hidden md:block">
          {" "}
          Baby World ကလေး <br /> အဝတ်အထည် အမျိုးမျိုး လက်ကား <br /> ဖြန့်ချီရေး
          - ပင်ရင်း
        </span>
        <span className="block md:hidden">
          {" "}
          Baby World ကလေး <br /> အဝတ်အထည် <br /> အမျိုးမျိုး လက်ကား <br />{" "}
          ဖြန့်ချီရေး - ပင်ရင်း
        </span>
      </span>
    ),
    image: "/client04.png",
  },
  {
    id: 5,
    name: (
      <span>
        Sweet Honey <br />
        Online Fashion Shop
      </span>
    ),
    image: "/client05.png",
  },
  {
    id: 6,
    name: (
      <span>
        One One onlineshop <br /> စပန့်ထည်လက်လီလက်ကား
      </span>
    ),
    image: "/client06.png",
  },
  {
    id: 7,
    name: (
      <span>
        Happy Lady Online <br /> Shopping
      </span>
    ),
    image: "/client07.png",
  },
  {
    id: 8,
    name: (
      <span>
        King Sky - ကင်းစကိုင်း <br /> ချုပ်ထည်အမျိုးမျိုး <br />{" "}
        လက္ကားဖြန့်ချီရေး
      </span>
    ),
    image: "/client01.png",
  },
];

export default function ClientSection() {
  return (
    <section className="section bg-white">
      <div className="px-4 lg:px-20 py-20 mx-auto flex flex-col md:flex-row justify-between items-start ">
        <div className="w-full md:w-2/3 lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 w-full order-2 md:order-1 mt-10 md:mt-0 justify-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-auto md:max-w-[240px] flex flex-col items-center h-[240px] lg:h-[220px] hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              {/* <div> */}
              <Image
                src={client.image}
                alt="client"
                width={140}
                height={140}
                className="w-[140px] h-[140px] object-contain rounded-lg"
              />
              <p className="text-[12px] font-semibold poppins text-gray-500 mt-5 text-center noto-sans-myanmar">
                {client.name}
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2 flex justify-start md:justify-end lg:justify-center order-1 md:order-2">
          <div className="">
            <h2 className="my-0 text-[36px] lg:text-6xl text-primary font-bold leading-tight inter">
              Some of <br /> Our Clients
            </h2>
            <p className="text-[16px] text-[#1F1F1F] max-w-lg font-semibold poppins">
              Trusted by successful <br /> Online Live Sale Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
