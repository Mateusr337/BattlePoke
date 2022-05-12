import { useContext } from "react";

import AuthContext from "../contexts/authContext";

const useAuth = () => {
  return useContext(AuthContext) as any;
};

export default useAuth;
