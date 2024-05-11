import logo from '@/assets/svg/react.svg';
const Logo = () => {
  return (
    <div className="flex-center w-200px">
      <img src={logo} alt="logo" />
      <h2 className="text-16px font-bold ml-16px text-primary">流量威胁感知系统</h2>
    </div>
  );
};

export default Logo;
