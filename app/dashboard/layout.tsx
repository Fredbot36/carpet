
import React from "react"; // <--- Das muss unbedingt oben stehen!

export const metadata = {
    title: 'Dashboard',
}

export default function DashboardLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
        </div>
    );
}