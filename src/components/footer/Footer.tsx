function Footer() {
  return (
    <footer className="container mt-20">
      <div className="grid grid-cols-4 border-y py-10 justify-between w-full">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">About</h1>
          <nav className="flex flex-col text-gray-400 gap-3">
            <a href="" className="hover:underline">About Us</a>
            <a href="" className="hover:underline">Careers</a>
            <a href="" className="hover:underline">Press</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">Support</h1>
          <nav className="flex flex-col text-gray-400 gap-3">
            <a href="" className="hover:underline">Help Center</a>
            <a href="" className="hover:underline">Contact Us</a>
            <a href="" className="hover:underline">FAQ</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">Legal</h1>
          <nav className="flex flex-col text-gray-400 gap-3">
            <a href="" className="hover:underline">Terms of Service</a>
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Cookie Policy</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold">Connect</h1>
          <nav className="flex flex-col text-gray-400 gap-3">
            <a href="" className="hover:underline">Facebook</a>
            <a href="" className="hover:underline">Twitter</a>
            <a href="" className="hover:underline">Instagram</a>
          </nav>
        </div>
      </div>
      <div className="flex items-center py-10 justify-center italic text-gray-500">
        @2024 | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
