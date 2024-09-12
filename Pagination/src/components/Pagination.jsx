import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ itemsPerPage, totalItems, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="w-full border-t border-gray-200 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center justify-center">
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        {/* Previous Btn */}
                        <button
                            onClick={() => { if(currentPage > 1) setCurrentPage(currentPage - 1) }}
                            disabled={currentPage === 1 ? true : false}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                        </button>

                        {totalItems && [...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx+1}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0 ${(idx + 1) === currentPage ? "bg-indigo-600" : ""}`}
                                onClick={() => { setCurrentPage(idx + 1) }}
                            >
                                {idx + 1}
                            </button>
                        )
                        )}

                        {/* Next page btn */}
                        <button
                            onClick={() => { if(currentPage < totalPages) setCurrentPage(currentPage + 1) }}
                            disabled={currentPage === totalPages ? true : false}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}