import { HashRouter } from 'react-router-dom';
import Router from './router';

import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider, App as AntApp } from 'antd';
import { useRequest } from 'ahooks';

import 'flag-icons/css/flag-icons.min.css';
import 'virtual:svg-icons-register';
import 'uno.css';
import '@unocss/reset/eric-meyer.css'; // unocss提供的浏览器默认样式重置
import '@/styles/index.scss';
import { getSystemSettingsConfig } from './api/modules/system-settings';

function App() {
  useRequest(getSystemSettingsConfig, {
    onSuccess: (data) => {
      document.title = data.browser_tab_name;
    }
  });
  return (
    <HashRouter>
      <ConfigProvider
        locale={zhCN}
        theme={{
          cssVar: {
            key: 'lp-admin'
          },
          hashed: false,
          token: {
            colorPrimary: /* '#379e0e'  */ '#646cff'
          }
        }}
      >
        <AntApp>
          <Router />
        </AntApp>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
