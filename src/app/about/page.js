import Image from "next/image";

export default function AboutPage() {
    return (
      <div>
        <h1>About Us</h1>
                <Image
                  className="dark:invert"
                  src="/img/logo.svg"
                  alt="ARAUM small logo"
                  width={48}
                  height={12}
                  priority
                />
        <p>This is the about page</p>
        <p>This will eventually be a link to home. Testing.</p>

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
      </div>
    );
  }