import Image from "next/image";

export default function MovieCard({ title, image }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-[180px] h-[270px] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="180px"
        />
      </div>
      <p className="mt-2 text-sm text-gray-300 truncate w-[180px]">{title}</p>
    </div>
  );
}
