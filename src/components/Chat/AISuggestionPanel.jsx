const AISuggestionPanel = ({ suggestions, onSelect }) => {
  return (
    <div className="bg-[#FFF8F1] border-t px-4 py-2 flex gap-2 overflow-x-auto">
      {suggestions.map((sugg, i) => (
        <button
          key={i}
          className="bg-[#670D2F] text-white px-3 py-1 text-sm rounded hover:opacity-90 transition"
          onClick={() => onSelect(sugg)}
        >
          {sugg}
        </button>
      ))}
    </div>
  );
};

export default AISuggestionPanel;
