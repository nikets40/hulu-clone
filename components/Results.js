import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid sm:px-16 md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} data={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
