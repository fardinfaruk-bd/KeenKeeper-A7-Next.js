import Banner from "@/components/homepage/Banner/Banner";
import Friends from "@/components/homepage/Banner/Friends";
import { div } from "framer-motion/client";


export default function Home() {
  return (
    <div>
      <Banner />
      <Friends />
    </div>
    
  );
}
