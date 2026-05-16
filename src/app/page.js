import AddHome from "@/components/AddHome";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-15">
      <Banner/>
      <Featured/>
      <AddHome/>
    </div>
  );
}
