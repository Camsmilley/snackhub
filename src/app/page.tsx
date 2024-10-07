import { auth } from "./_services/auth";
import database from "./_services/database";
import AdminDashboard from "./admindash/dashboard/page";
import Homepage from "./homepage";
import UserDashboard from "./userdash/userdash/page";

export default async function Home() {
  // const user = await database.user.findMany();
  const session = await auth();
  console.log(session);
  return (
    <div>
      <Homepage />
    </div>
  );
}
