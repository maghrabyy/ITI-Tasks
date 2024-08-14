import { Homepage } from '../pages/Homepage';
import { Header } from '../components/MainHeader';
import { Footer } from '../components/Footer';
import FixedNavbar from '../components/FixedNavbar';
import { MyDrawer } from '../components/myDrawer';
import { useDrawerToggler } from '../context/DrawerTogglerContext';
const pages = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

export const RootLayout = () => {
  const { isRightAnchor, showDrawer, drawerToggleHandler } = useDrawerToggler();

  return (
    <>
      <FixedNavbar />
      <MyDrawer
        items={pages}
        setShowDrawer={() => drawerToggleHandler(isRightAnchor)}
        showDrawer={showDrawer}
        rightAnchor={isRightAnchor}
      />
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};
