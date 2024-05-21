import { User } from '@/api/interface/user';
import { login, logout } from '@/api/modules/login';
import { getMd5Str } from '@/utils/string';
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
        const { data } = await login({
          ...values,
          password: getMd5Str(values.password)
        });
        set({
          token: data.token,
          userInfo: data.user
        });
      },
      logout: () => {
        logout().finally(() => {
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
