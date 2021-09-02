import MainHeader from '../../containers/MainHeader/MainHeader';

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;