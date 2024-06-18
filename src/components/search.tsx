import Image from "next/image";

export const Search = () => {
    return (
        <div className="flex items-center gap-4">
            <Image
                src="/assets/icon-search.svg"
                alt="Search"
                width={15}
                height={15}
            />
            <input
                type="text"
                className="bg-transparent pr-5 text-white outline-none placeholder:text-white"
                placeholder="Buscar"
            />
        </div>
    );
};
