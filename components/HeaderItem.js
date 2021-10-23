import { useRouter } from "next/router";

function HeaderItem({ title, Icon }) {

  const router = useRouter();

  return (
    <div onClick={()=>router.push("/")} className="flex flex-col items-center cursor-pointer group w-16 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="hidden sm:inline-block opacity-0 sm:group-hover:opacity-100 tracking-widest uppercase">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
