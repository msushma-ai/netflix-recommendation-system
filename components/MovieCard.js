export default function MovieCard({ title, image }) {
  return (
    <div className="relative cursor-pointer group">
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-auto transition-transform duration-300 group-hover:opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-60">
        <button className="bg-red-600 px-4 py-2 rounded text-white font-semibold hover:bg-red-700">
          ▶ Play
        </button>
        <p className="mt-2 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}


