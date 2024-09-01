import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={styles.nav}>
        <h1>My Blog</h1>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/create" style={styles.link}>Create Blog</Link>
        </div>
      </nav>
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
  },
  main: {
    padding: '1rem',
  },
};

export default Layout;
