import React from 'react'

const ProgressBar = ({ progress = 0 }) => {
    const showProgress = progress <= 100 ? (progress >= 0 ? progress : 0) : 100;

    return (
        <div className="relative h-5 w-[500px] bg-transparent border border-blue-500 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="bg-transparent text-black z-10">{showProgress}%</div>
            {/* Use inline styles to dynamically scale the progress bar */}
            <div
                className="h-full w-full bg-teal-500 absolute origin-left"
                style={{ transform: `scaleX(${showProgress / 100})` }}
            ></div>
        </div>
    );
};

export default ProgressBar;