import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import TwoFactorAuthForm from "./two-factor-auth-form";
import db from "@/db/drizzle";
import { users } from "@/db/usersSchema";
import { eq } from "drizzle-orm";

const MyAccount = async () => {
  const session = await auth();

  const [user] = await db
    .select({
      TwoFactorActivated: users.twoFactorActivated,
    })
    .from(users)
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    .where(eq(users.id, parseInt(session?.user?.id!)));
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>My Account</CardTitle>
      </CardHeader>
      <CardContent>
        <Label>Email Address</Label>
        <div className="text-muted-foreground">{session?.user?.email}</div>
        <TwoFactorAuthForm
          twoFactorActivated={user.TwoFactorActivated ?? false}
        />
      </CardContent>
    </Card>
  );
};
export default MyAccount;
