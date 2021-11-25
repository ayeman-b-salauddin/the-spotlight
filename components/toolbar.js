import { useRouter } from "next/router";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div class="flex justify-center p-8 space-x-5 bg-white shadow-sm">
      <div
        onClick={() => router.push("/feed/1")}
        class="font-newsFont text-7xl font-extrabold text-black underline cursor-pointer"
      >
        The Spotlight
      </div>
    </div>
  );
};
