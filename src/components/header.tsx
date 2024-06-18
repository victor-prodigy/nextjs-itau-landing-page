import Image from "next/image";

import { ItemMenu } from "./item-menu";
import { Search } from "./search";
import { Container } from "./container";

export const Header = () => {
    return (
        <header className="bg-primary-orange relative flex h-20 w-full items-center">
            <div className="bg-primary-blue absolute right-0 top-0 z-0 h-full w-[19%]"></div>

            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu name="Para você" />
                            </li>
                            <li>
                                <ItemMenu name="Para empresas" />
                            </li>
                            <li>
                                <ItemMenu name="Serviços" />
                            </li>
                            <li>
                                <ItemMenu name="Ajuda" />
                            </li>
                        </ul>
                    </div>

                    {/* Search */}
                    <Search />
                </div>

                <button className="bg-primary-blue flex h-20 items-center gap-4 px-10">
                    <Image
                        src="/assets/icon-user.svg"
                        alt="Icon user"
                        width={25}
                        height={25}
                    />
                    <span className="font-bold text-white">Acesssar conta</span>
                </button>
            </Container>
        </header>
    );
};
