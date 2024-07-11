import Image from 'next/image'

export default function Contacts() {
  return (

      <div className='flex flex-col md:flex-row'>
        <div className="flex md:w-1/2 md:relative">
          <Image
            src="/girl.png"
            alt="Verti"
            height={3*932}
            width={3*430}
            className='object-contain'
          />
        </div>
        <div className="md:w-1/2 z-0 p-5 flex items-end md:items-center absolute inset-0 md:static">          
            <p className="text-6xl md:text-9xl font-bold mb-6 text-dark-verti">OLLLLA
            </p>
        </div>
      </div>
  )
}