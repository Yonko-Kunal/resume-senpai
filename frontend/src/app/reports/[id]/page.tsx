import Navbar from "@/components/navbar";

type MyReportProps = {
    params: {
        id: number;
    };
};
export default function Page({ params }: MyReportProps) {
    return (
        <div>
            <Navbar variant="dashboard" />
            my report: {params.id}
        </div>
    )
}