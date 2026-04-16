import PieChartWithPaddingAngle from "@/components/stats/Rechart";

export const metadata = {
  title: "Stats - KeenKeeper",
  description: "View your friendship statistics on KeenKeeper",
};

const page = () => {
    return (
        <div className="container mx-auto">
            <div className="w-[90%] mx-auto mt-10">
                <h1 className="text-3xl sm:text-5xl text-[#1F2937] font-bold mb-4">Friendship Analytics</h1>
                <PieChartWithPaddingAngle />
            </div>

        </div>
    );
};

export default page;