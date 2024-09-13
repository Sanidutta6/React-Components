import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ itemsPerPage, totalItems, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate visible pages for compact pagination
    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisibleButtons = 5; // Number of buttons to display at once

        if (totalPages <= maxVisibleButtons) {
            // If total pages are less than or equal to max visible buttons, show all pages
            for (let i = 1; i <= totalPages; i++) {
                visiblePages.push(i);
            }
        } else {
            // Show the first, last, current, and nearby pages
            if (currentPage <= 3) {
                // Near the beginning
                visiblePages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Near the end
                visiblePages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // Somewhere in the middle
                visiblePages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return visiblePages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="w-full border-t border-gray-200 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center justify-center">
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        {/* Previous Button */}
                        <button
                            onClick={() => {
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                            }}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                        </button>

                        {/* Page Numbers */}
                        {visiblePages.map((page, idx) => (
                            <button
                                key={idx}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0 ${page === currentPage ? "bg-indigo-600" : ""
                                    } ${page === "..." ? "cursor-default" : ""}`}
                                onClick={() => {
                                    if (page !== "...") setCurrentPage(page);
                                }}
                                disabled={page === "..."}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() => {
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                            }}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}