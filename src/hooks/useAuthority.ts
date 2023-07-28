import { useEffect, useState } from 'react';
// import { jumpToSSOLogout, jumpToSSOLogin, getToken } from '@upu/auth';

function useAuthority(): [boolean, (flag: boolean) => void, () => void, () => void] {
  const token = 'ddd'; //getToken();
  const [loginFlag, setLoginFlag] = useState<boolean>(false);
  useEffect(() => {
    // setLoginFlag(!!token);
  }, [token]);
  const gotoLogin = () => {
    // jumpToSSOLogin();
  };
  const gotoLogout = () => {
    // jumpToSSOLogout();
  };

  return [loginFlag, setLoginFlag, gotoLogin, gotoLogout];
}

export default useAuthority;
