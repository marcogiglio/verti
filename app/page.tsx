import Image from 'next/image'

export default function Home() {
  return (

      <div className='flex flex-col md:flex-row max-sm:min-h-screen'>
        <div className="md:w-1/6 "/>
        <div className="relative flex md:w-2/3 md:pt-10 max-sm:min-h-screen">
            <Image
            src="/heli_side.jpg"
            alt="Verti"
            height={4000}
            width={2000}
            className='object-cover md:object-contain border-dark-verti md:border-2'
            style={{objectPosition: "68% 32%"}}
            />
          
          <div className="absolute max-sm:top-5 md:top-20 right-10 md:w-1/2 pl-5 md:pl-20">
            <p className='max-sm: text-6xl font-bold text-right text-light-verti text-opacity-100 uppercase leading-0 tracking-tighter'>The First Shared Helicopter Ride of Santa Caterina</p>
          </div>
        <button className="absolute max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2 bottom-10 md:left-10 h-10 w-40 bg-mid-verti shadow rounded z-0 font-bold hover:bg-dark-verti hover:text-light-verti text-xl tracking-tighter">RESERVE </button>
        </div>
        <div className="md:w-1/6"/>
      </div>
  )
}