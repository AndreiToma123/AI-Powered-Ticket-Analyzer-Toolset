const AISummary = ({ summary } : { summary: string }) => {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                <span>AI Summary</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
        </div>
    );
}

export default AISummary;