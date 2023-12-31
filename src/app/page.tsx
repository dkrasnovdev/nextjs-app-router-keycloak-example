import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { SignIn, SignOut } from "@/components/NextAuthButtons";
import Upload from "@/components/Upload";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className={styles.main}>
      {!!session && <Upload />}
      {!!session && <pre>{JSON.stringify(session, null, 2)}</pre>}
      {!!session ? <SignOut /> : <SignIn />}
    </main>
  );
}
