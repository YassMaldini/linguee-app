import { Secrets } from "../../types/models/secrets/secrets.types";
import { User } from "../../types/models/user/User.types";

interface AuthenticationReducerState {
  profile: User | null;
  secrets: Secrets | null;
}

export default AuthenticationReducerState;
