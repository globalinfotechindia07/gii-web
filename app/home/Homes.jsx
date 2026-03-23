import Image from 'next/image'

function Homes() {
  return (
    <div>
    <Image
     src="/images/giilogo.jpeg" 
     alt="Global Infotech Logo"
     className='rounded-full h-[50%] w-[80%] object-contain'
      width={80}
       height={80}
        />
    </div>
  )
}

export default Homes
