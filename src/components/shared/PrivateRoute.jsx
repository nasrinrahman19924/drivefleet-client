"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !data) {
      router.push("/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return null;
  }

  return children;
};

export default PrivateRoute;