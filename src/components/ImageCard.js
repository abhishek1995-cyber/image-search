import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ImageCard() {

  const { results } = useSelector((state) => state.imageData);
  console.log(results, "import");

  return (
    <div className="img-card">
      {results &&
        results.map((item, index) => {
          return (

                <div className="card">
                <img
                 key={index}
                  src={item?.urls?.raw}
                  alt={item?.alt_description}
                  width="100%"
                  height="100%"
                />
                
              <Link
              className="link"
               to={`/image/${item.id}`}>
                <button className="btn">
                {item?.alt_description}
                </button>
               </Link>
                </div>
          );
        })}
    </div>
  );
}
