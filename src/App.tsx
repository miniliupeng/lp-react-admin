import { HashRouter } from 'react-router-dom';
import Router from './router';

import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider, App as AntApp } from 'antd';
import { useRequest } from 'ahooks';
import { getSystemSettingsConfigService } from '@/services/system-settings';

function App() {
  useRequest(getSystemSettingsConfigService, {
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
