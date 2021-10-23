function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-16 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="hidden sm:inline-block opacity-0 sm:group-hover:opacity-100 tracking-widest uppercase">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
