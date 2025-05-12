import Image from "next/image";
// import AraumLogotype from "@/assets/araum.svg";
// console.log(AraumLogotype);

 
export default function Home() {
  return (

    <div className="bg-gradient-to-r from-blue-500 via-purple-500
               to-pink-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start object-contain">
        
      <h2 className="atitle text-[clamp(2rem,20vw,20rem)] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">ARAUM</h2>

        {/* <svg width={1800}
          height={380} className="max-w-full fill-blue-500 dark:fill-amber-600">
            <use href="/img/araum2.svg#ARAUM"></use>
        </svg> */}


        {/* <Image
          className="max-w-full bg-green-500 fill-white dark:fill-blue-800"
          src="/img/araum2.svg"
          alt="ARAUM logo"
          width={1800}
          height={380}
          priority
        /> */}





        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"> 



          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            wow, this is a really long line of text that should be truncated
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/img/logo.svg"
              alt="ARAUM logomark"
              width={20}
              height={20}
            />
            Hot Dang
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docsssssss
          </a>
        </div>
      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-gray-600" >

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>

      </footer>

    </div>
  );
}
