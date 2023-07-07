import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // Importa el tipo RootState según tu estructura de Redux
import { changeEmail } from "../redux/userSlice";
import { Dispatch } from "redux";

export function Email() {
  const email = useSelector((state: RootState) => state.user.email);
  const dispatch: Dispatch = useDispatch();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event.target.value));
  };

  return <input type="email" value={email} onChange={handleEmailChange} />;
}
