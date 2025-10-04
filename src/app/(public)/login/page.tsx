import LoginForm from "@/components/modules/Auth/LoginForm";
import { Lock } from "lucide-react";

export const metadata = {
  title: "Login | Adir Portfolio",
  description: "Private access for portfolio owner",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#fefcf9] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center mb-8">
        <Lock className="h-10 w-10 text-orange-500" />
        <h1 className="mt-3 text-3xl font-extrabold text-black">Owner Login</h1>
        <p className="text-black/60 text-sm mt-1 text-center max-w-sm">
          Access to private features is restricted to the portfolio owner only.
        </p>
      </div>

      {/* Client Component */}
      <LoginForm />
    </main>
  );
}
