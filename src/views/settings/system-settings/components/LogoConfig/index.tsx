import { UploadCard } from './UploadCard';

export const LogoConfig = () => {
  return (
    <div>
      <h1 className="text-4 mb-4">LOGO设置</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        <UploadCard title={'导航 LOGO'} image_type={0} />
        <UploadCard title={'登录页企业 LOGO'} image_type={1} />
        <UploadCard title={'浏览器页签 LOGO'} image_type={2} />
      </div>
    </div>
  );
};
