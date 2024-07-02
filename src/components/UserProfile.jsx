// import useParams from build nested params
import { useParams } from "react-router-dom";
// we need to import Outlet to be the placeholder of any child routes
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserProfile() {
  // destructured username from the params object
  let { username } = useParams();
  return (
    <>
      <h1>User Profile</h1>
      <h2>username: {username}</h2>
      <Link to={`/profile/${username}`}>My Profile</Link>
      {/* Link to the testimonials page child route */}
      <Link to={`/profile/${username}/testimonials`}>My Testimonials</Link>
      {/* Outlet is a placeholder for any child routes */}
      <Outlet />
    </>
  );
}
