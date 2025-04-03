import DetailDashboard from "../features/DetailHistory/components/DetailDashboard";
import { RoleError } from "../features/Signup/utils/error";
import useAuthStore from "../store/useAuthStore";

export default function DetailHistoryPage() {
  const { role } = useAuthStore();

  if (role === "guest") {
    throw new RoleError();
  }
  return (
    <div>
      <DetailDashboard />
    </div>
  );
}
