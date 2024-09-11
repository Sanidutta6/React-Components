import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-left border-b-2 border-indigo-500 px-8 py-3">
      <Link to="/">
        <h1 className="text-2xl font-semibold">Quizz App</h1>
      </Link>
    </header>
  )
}

export default Header;