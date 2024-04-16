import logo from '@/assets/svg/react.svg';
const Logo = () => {
  return (
    <div className="h-64px flex-center">
      <img src={logo} alt="logo" />
      <h2 className="text-24px font-bold ml-16px">lp Admin</h2>
    </div>
  );
};

export default Logo;
