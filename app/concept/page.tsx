import Image from 'next/image'

export default function Home() {
  return (

      <div className='flex flex-col md:flex-row'>
        <div className="md:w-1/6 "></div>
        <div className="flex md:w-1/4 md:pt-10">
          <div> <Image
            src="/girl.png"
            alt="Verti"
            height={932}
            width={430}
            className='object-contain border-dark-verti md:border-2'
          />
          </div>
         
        </div>
        <div className="flex md:w-5/12 max-sm:p-5 md:pt-10 md:pl-10"> 
            <p className="text-l md:text-l text-justify
             text-dark-verti "> 
                <h1 className='font-extrabold uppercase'>Elevate your travel experience with Verti</h1>    
                <p>
                  Elevate your travel experience with Verti, the premier aerial transportation solution connecting the vibrant urban centers of Santa Catarina, Brazil. Our state-of-the-art helicopter fleet whisks discerning passengers between the bustling metropolises of Florianópolis, Joinville, Blumenau, and beyond, offering unparalleled convenience and breathtaking views of the diverse Brazilian landscape.
                </p>
                <br></br>    
                
                <h1 className='font-extrabold uppercase'>Redefining Inter-City Transit</h1>    

                <p>
                  Verti redefines inter-city transit, seamlessly blending luxury and efficiency for the modern traveler. Whether you're a busy executive racing to close a deal, a tourist eager to maximize your exploration of Santa Catarina's cultural tapestry, or a local resident seeking to elevate your commute, Verti's on-demand service ensures you soar above the constraints of terrestrial transportation.
                  </p>
                <br></br>    
                <h1 className='font-extrabold uppercase'>Safety and Comfort: Our Top Priorities</h1>    
                <p>
                  Our meticulously maintained aircraft and rigorously trained pilots prioritize your safety and comfort, allowing you to arrive at your destination refreshed and ready to conquer the day. Bypass the congested highways and experience the freedom of the skies as you traverse Santa Catarina's picturesque terrain, from the sun-drenched beaches of the coast to the verdant hills of the interior.
                  </p>
                <br></br>    
                <h1 className='font-extrabold uppercase'>Seamless Booking and Convenience</h1>    
                <p>Verti's user-friendly mobile app puts the power of personal aviation at your fingertips, enabling you to book your skyward journey with just a few taps. Our strategically located helipads in each serviced city ensure minimal ground transfer time, further streamlining your travel experience.
                </p>
                <br></br>
                <h1 className='font-extrabold uppercase'>Embracing the Future of Urban Mobility</h1>    
                <p>Embrace the future of urban mobility and discover a new perspective on Santa Catarina with Verti – where time is precious, and the journey is as exhilarating as the destination. 
                </p>
                </p>
                </div>
        <div className="md:w-1/6"></div>
      </div>
  )
}