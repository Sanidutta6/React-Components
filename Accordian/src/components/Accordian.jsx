import { ChevronUp } from "lucide-react";
import { useState } from 'react';

const Accordion = ({ content }) => {
    const [open, setOpen] = useState(null);

    const handleAccordionClick = (index) => {
        if (index === open) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    // Check for edge cases where content might be null or not an array
    if (!Array.isArray(content) || content.length === 0) {
        return <p>No FAQs available.</p>;
    }

    return (
        <>
            {content.map((faq, idx) => (
                <div
                    key={idx}
                    className="mb-2 border-b cursor-pointer"
                    onClick={() => handleAccordionClick(idx)}
                    role="button"
                    aria-expanded={open === idx}
                >
                    <div className="flex items-center justify-between py-2">
                        <p className="text-xl font-medium">{faq.question}</p>
                        <ChevronUp
                            className={`duration-300 transform ${open === idx ? "rotate-180" : ""}`}
                        />
                    </div>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open === idx ? "max-h-40" : "max-h-0"}`}
                    >
                        <p className="py-2">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Accordion;