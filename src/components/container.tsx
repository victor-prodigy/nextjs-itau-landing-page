type Props = {
    children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
    return (
        <div className="mx-auto flex w-full max-w-[1246px] items-center justify-between px-[15px]">
            {children}
        </div>
    );
};
