import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Importa el tipo RootState según tu estructura de Redux

export function Header() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header>
      <ul>
        <li>Name: {user?.name}</li>
        <li>Username: {user?.username}</li>
        <li>Email: {user?.email}</li>
      </ul>
    </header>
  );
}
