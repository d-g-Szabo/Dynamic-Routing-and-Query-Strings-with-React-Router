// import testimonials from library to use as test data
import { testimonials } from "../lib/testimonialsData";
// import useSearchParams hook to declare query strings
// You can use the dynamic query string values with the useSearchParams hook this gives us access to the query string values in the URL and allows us to update them. This is useful for sorting, filtering, and pagination. "/testimonials?sort=asc"
import { useSearchParams } from "react-router-dom";

export default function UserTestimonial() {
  // we are destructuring a variable from an array to store the value of my searchParams
  const [searchParams, setSearchParam] = useSearchParams();
  // here we are declaring the word that we want to use in the uirl quary string, in this case, sort
  const sort = searchParams.get("sort");

  // logic to orginaize array items in ascending or descending order
  if (sort === "asc") {
    testimonials.sort();
  } else if (sort === "desc") {
    testimonials.sort();
    testimonials.reverse();
  }

  const handleChange = (event) => {
    setSearchParam({ sort: event.target.value });
  };

  //todo could add Links so the user can sort testimonials without changing the url
  // need Link component from react-router-dom and useParams hook
  return (
    <div>
      <h1>User Testimonial</h1>
      <p>sort: {sort}</p>
      <select onChange={handleChange} value={sort || ""}>
        <option value="">Select</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {testimonials.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
