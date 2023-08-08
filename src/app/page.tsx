import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SignIn, SignOut } from "@/components/NextAuthButtons";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className={styles.main}>
      {!!session && (
        <pre className={styles.session}>{JSON.stringify(session, null, 2)}</pre>
      )}
      {!!session ? <SignOut /> : <SignIn />}
    </main>
  );
}
