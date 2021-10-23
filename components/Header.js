import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  console.log(process.env.baseMediaUrl + "ua6");
  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-6">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={process.env.baseMediaUrl + "ua6"}
        width={200}
        height={80}
      />
    </header>
  );
}

export default Header;