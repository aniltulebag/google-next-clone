import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import User from './User';

const Header = () => {
  const router = useRouter();

  const {
    query: { term },
  } = router;

  const aboutUrl = 'https://about.google/';
  const storeUrl = 'https://store.google.com/';
  const gmailUrl = 'https://mail.google.com/';

  const goToImages = () => {
    router.push(`search?term=${term ? term : 'google'}&searchType=image`);
  };

  return (
    <header className="main-header">
      <div className="header-links">
        <Link href={aboutUrl}>About</Link>
        <Link href={storeUrl}>Store</Link>
      </div>
      <div className="header-links">
        <Link href={gmailUrl}>Gmail</Link>
        <p onClick={goToImages} className="cursor-pointer">
          Images
        </p>
        <User />
      </div>
    </header>
  );
};

export default Header;
