import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ data }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        alt=""
        src={`${BASE_URL + (data.backdrop_path || data.poster_path)}`}
        layout="responsive"
        height={1080}
        width={1920}
        objectFit="cover"
      />
      <div className="p-2">
        <p className="line-clamp-1 group-hover:line-clamp-none max-w-md ">
          {data.overview}
        </p>
        <h2 className="mt-1 sm:mt-2 text-2xl group-hover:font-bold text-white transition-all duration-100 ease-in-out">
          {data.title || data.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {data.media_type && `${data.media_type} • `}{" "}
          {data.release_date || data.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {data.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName="thumbnail";

export default Thumbnail;
