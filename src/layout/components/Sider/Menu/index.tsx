import { useAuthStore } from '@/stores';
import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Icon from '@ant-design/icons';
import { SvgIcon } from '@/components/SvgIcon';
const LayoutMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getVerticalMenuList = useAuthStore((state) => state.getVerticalMenuList);
  const verticalMenuList = getVerticalMenuList(`/${pathname.split('/')[1]}`).map((item) => {
    const [type, icon] = item.icon.split(':');

    let IconCpm = null;
    if (type === 'antd') {
      const IconName = Icon[icon];
      IconCpm = <IconName />;
    } else {
      IconCpm = <SvgIcon name={icon} />;
    }

    return {
      key: item.key,
      label: item.label,
      icon: IconCpm
    };
  }) as MenuProps['items'];
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  return (
    <div className="h-full flex flex-col">
      <Menu
        className="flex-1 overflow-auto text-3.5"
        mode="inline"
        triggerSubMenuAction="click"
        selectedKeys={[pathname]}
        onClick={onClick}
        items={verticalMenuList}
      ></Menu>
    </div>
  );
};

export default LayoutMenu;
