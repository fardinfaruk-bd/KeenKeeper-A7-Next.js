import PieChartWithPaddingAngle from "@/components/stats/Rechart";

const page = () => {
    return (
        <div className="container mx-auto">
            <div className="w-[90%] mx-auto mt-10">
                <h1 className="text-5xl text-[#1F2937] font-bold mb-4">Friendship Analytics</h1>
                <PieChartWithPaddingAngle />
            </div>

        </div>
    );
};

export default page;