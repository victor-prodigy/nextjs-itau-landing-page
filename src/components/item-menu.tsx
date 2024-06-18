import Image from "next/image";

type Props = {
    name: string;
};

export const ItemMenu = ({ name }: Props) => {
    return (
        <button className="flex items-center gap-3">
            <span className="font-bold text-white">{name}</span>
            <Image
                src="/assets/arrow-down.svg"
                alt="Arrow dropdown"
                width={10}
                height={10}
            />
        </button>
    );
};
