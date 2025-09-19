"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Dashboard = {
    id: string
    resume: string
    jobRole: string
    date: string
    matchScore: number
}

export const columns: ColumnDef<Dashboard>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "resume",
        header: "Resume",
    },
    {
        accessorKey: "jobRole",
        header: "Job Role",
    },
    {
        accessorKey: "date",
        header: "Date of Analysis",
    },
    {
        accessorKey: "matchScore",
        header: "Match Score",
        cell: ({ row }) => <span>{row.original.matchScore}%</span>, // Add % suffix
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => (
            <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={() => {
                    // Navigate to report page with ID
                    window.location.href = `/reports/${row.original.id}`
                }}
            >
                View Report
            </Button>
        ),
    },

]

export const DashboardReports: Dashboard[] = [
    { id: "1", resume: "Resume v1.pdf", jobRole: "Software Engineer", date: "Jan 15, 2024", matchScore: 85 },
    { id: "2", resume: "Resume v2.pdf", jobRole: "Data Scientist", date: "Feb 20, 2024", matchScore: 78 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
    { id: "3", resume: "Resume v3.pdf", jobRole: "Product Manager", date: "Mar 25, 2024", matchScore: 92 },
]