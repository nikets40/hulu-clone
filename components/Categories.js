import { useRouter } from "next/router";

function Categories({ categories }) {
  const router = useRouter();
  return (
    <nav className="relative mt-5 ">
      <div className=" flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        
      <p 
      onClick={()=>router.push("/")}
      className="category-button">
          Trending
        </p>
        
        {categories.map((genre) => (
          <p
            onClick={() => router.push(`/?genreId=${genre.id}`)}
            key={genre.id}
            className="category-button last:pr-20"
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-l from-transparent to-[#06202A] h-10 w-10" />
    </nav>
  );
}

export default Categories;
