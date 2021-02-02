import { Link } from 'react-router-dom';
import Container from '../../styles/Container';

const Header = ({ title, linkTo, linkName }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <Link to={linkTo}>{linkName}</Link>
      </div>
    </Container>
  );
};

export default Header;
