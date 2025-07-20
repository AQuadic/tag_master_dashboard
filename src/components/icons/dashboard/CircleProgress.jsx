const CircularProgress = ({ progress = 0 }) => {
    const validProgress = Math.min(Math.max(progress, 0), 100);
    const strokeDashoffset = 100 - validProgress;

    return (
        <section>
            <div className="relative size-25">
                <svg
                    className="size-full"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 dark:text-neutral-700"
                        strokeWidth="3"
                    />
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-[#007EC1]"
                        strokeWidth="3"
                        strokeDasharray="100"
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{ transition: "stroke-dashoffset 0.5s ease" }}
                    />
                </svg>
            </div>
        </section>
    )
}

export default CircularProgress