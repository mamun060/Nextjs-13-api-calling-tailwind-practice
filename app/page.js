import Image from 'next/image'
import Link from 'next/link';


// next js sob somoy cache dore rakhe jokhon direct fetch request kora hoy. ai cache reload dile update tar jonno cache property use korte hoy
// thats call Fetch data on the server using server components

const mydog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    // cache: "no-store"
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const dogs = await mydog();
  return (
    <div className=' text-center p-14 text-3xl font-bold '>
      Home page
      <div className=' text-left'>
        <Link className=' bg-orange-700 text-white text-xl py-2 px-4 rounded-lg shadow-md' href="/users"> Go to User List Page </Link>
      </div>
      <div className=' text-center p-2'>
        <Image className=' text-center m-auto rounded-xl shadow-2xl ' width={500} height={500} src={dogs.message}  alt='Images' />
      </div>
      
    </div>
  )
}
