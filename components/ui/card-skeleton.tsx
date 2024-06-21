const CardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-1">
            <div className="w-full bg-zinc-700 animate-pulse rounded-lg relative">
                <div style={{ paddingTop: '56.25%' }}></div> {/* For 16:9 aspect ratio */}
            </div>
            <div className="bg-zinc-700 animate-pulse w-24 h-4 rounded-md"></div>
        </div>
    );
}

export default CardSkeleton;