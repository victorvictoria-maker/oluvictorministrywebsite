import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "../../../../serveractions/auth";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div>
        <p className='mt-20'>Hello {data.user.email}</p>
        <form>
          <button formAction={logout}>Logout </button>
        </form>
      </div>
      <div> {children}</div>
    </div>
  );
};

export default AdminLayout;
