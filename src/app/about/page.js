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

      </div>
    );
  }