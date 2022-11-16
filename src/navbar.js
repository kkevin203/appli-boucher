import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import Logo_panier from './components/Logo-panier';


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Producteur-Boucher
      </Link>
      <ul>
        <Logo_panier />
        <CustomLinkWithMenuItem
          to="connection"
          firstMenu="Boucher"
          secondMenu="Producteur"
          thirdMenu="Déconnection"
        >
          connection
        </CustomLinkWithMenuItem>
        <CustomLink to="propos">A propos</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLinkWithMenuItem({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props} onClick={handleClick}>
        {children}
      </Link>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          // le prop 'to' (et tout autre prop non reconnu par MenuItem lui-même)
          // sera transmis au composant Link
          to="/connection"
        >
          {' '}
          {props.firstMenu}
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/connection">
          {props.secondMenu}
        </MenuItem>
        <MenuItem onClick={handleClose}>{props.thirdMenu}</MenuItem>
      </Menu>
    </li>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
