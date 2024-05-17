// import logo from '@/assets/svg/react.svg';
import { getLogoService } from '@/services/system-settings';
import { useRequest } from 'ahooks';
const Logo = () => {
  const { data } = useRequest(() => getLogoService({ image_type: 0 }), {
    cacheKey: `cacheKey-logo-0`
  });
  return (
    <div className="flex-center px-4">
      <img src={data} className="max-w-187px max-h-40px object-contain" alt="logo" />
      {/* <h2 className="text-16px font-bold ml-16px text-primary">流量威胁感知系统</h2> */}
    </div>
  );
};

export default Logo;
