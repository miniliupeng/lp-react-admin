import { User } from '@/api/interface/user';
import { loginService, logoutService } from '@/services/login';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  token: string;
  userInfo: Partial<User>;
  login: (values: any) => Promise<any>;
  logout: () => void;
}
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      token: '',
      userInfo: {},
      login: async (values) => {
        const { data } = await loginService(values);
        set({
          token: data.token,
          userInfo: data.user
        });
      },
      logout: () => {
        logoutService().finally(() => {
          set({
            token: 'data.token',
            userInfo: {}
          });
        });
      }
    }),
    {
      name: 'userStore'
    }
  )
);
