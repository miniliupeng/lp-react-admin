import { mixColor } from '@/utils/color';
import { LoginForm } from './components/LoginForm';
import { WaveBg } from './components/WaveBg';
import './index.scss';
const Login = () => {
  const bgColor = mixColor('#ffffff', '#646cff', 0.2);
  return (
    <div className="flex h-screen" style={{ backgroundColor: bgColor }}>
      <WaveBg />
      <LoginForm />
    </div>
  );
};

export default Login;
