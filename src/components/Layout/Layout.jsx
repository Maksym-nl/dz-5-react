import { StyledLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
