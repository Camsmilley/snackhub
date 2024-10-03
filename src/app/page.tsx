import { auth } from "./_services/auth";
import database from "./_services/database";
import Homepage from "./homepage";

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
