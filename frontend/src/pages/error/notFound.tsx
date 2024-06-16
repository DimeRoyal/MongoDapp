import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <>
      <div>404 not found</div>

      <Link to="/">Home</Link>
    </>
  );
}
