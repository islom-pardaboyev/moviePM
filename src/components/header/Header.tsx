import { Link } from "react-router";
import { NavbarContext } from "../../utils";
import { Select } from "antd";

function Header() {
  return (
    <header className="py-3">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">MoviePM</a>
        <nav className="flex items-center text-sm font-medium gap-x-4">
          {NavbarContext.map((item, inx: number) => (
            <Link
              to={item.path}
              className="border-b border-transparent hover:border-black"
              key={inx}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-x-2">
          <Select
            className="w-[300px]"
            size="middle"
            showSearch
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
          <button className="px-4 rounded py-2 text-sm font-medium text-white bg-black hover:bg-gray-800">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
