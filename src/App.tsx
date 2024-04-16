import { HashRouter } from 'react-router-dom';
import Router from './router';

import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <HashRouter>
      <ConfigProvider
        locale={zhCN}
        theme={{
          cssVar: {
            key: 'admin-light'
          },
          hashed: false,
          token: {
            // colorPrimary: '#275FAE'
          }
        }}
      >
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
