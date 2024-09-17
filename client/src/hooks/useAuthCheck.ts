import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { userState } from '@/recoil/atom';

export const useAuthCheck = () => {
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/me", { withCredentials: true });
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, [setUser]);

  return loading;
};
