import DetailDashboard from "../features/DetailHistory/components/DetailDashboard";
import { useRoleAuth } from "../hooks/useRoleAuth";

export default function DetailHistoryPage() {
  useRoleAuth();
  return (
    <div>
      <DetailDashboard />
    </div>
  );
}
