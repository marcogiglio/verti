import Image from "next/image";

export default function Home() {
  return (    
    <div className="flex flex-row h-full">
            <div className="flex">
                <p className="font-sans text-8xl text-light-verti font-bold font-archivo hover:text-dark-verti m-16">
                    O Primeiro Helicóptero Compartilhado de Santa Caterina
                </p>
            </div>
            <div className="relative w-full h-full">
                <Image
                src="/girl.png"
                alt="Flying"
                className="w-full h-full object-contain"
                width={3020}
                height={4255}
                priority
                />
                <button className=" absolute bottom-10 right-20 bg-light-verti hover:bg-dark-verti hover:text-light-verti text-dark-verti 
                font-bold py-2 px-4 rounded-md shadown-lg">
                <p className="font-sans text-lg">RESERVA</p>
                </button>
        </div>    
    </div>
  );
}
