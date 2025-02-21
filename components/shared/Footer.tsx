import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 py-6">
      <div className="wrapper flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
       

        <p className="text-gray-600 text-sm">
          © 2025 Evently. All Rights Reserved.
        </p>

        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/icons/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-75"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-75"
            />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/icons/youtube.png"
              alt="Youtube"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
