import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { logout } from "../../../../serveractions/auth";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p className='mt-40'>Hello {data.user.email}</p>
      <form>
        {" "}
        <button formAction={logout}>Logout </button>
      </form>
    </div>
  );
}
