import Image from "next/image";

import { Container } from "./container";

export const SectionHero = () => {
    return (
        <section className="bg-img_bg_hero h-[704px] w-full bg-cover bg-center bg-no-repeat">
            <Container>
                <div className="max-w-[500px] flex-1">
                    <h1 className="mb-4 text-7xl font-bold text-white">
                        Tenha seu banco na palma da mão.
                    </h1>
                    <p className="mb-8 max-w-[408px] text-xl text-white">
                        Todas as operações que você precisa em um só lugar.
                        Simples, completo e feito para você.
                    </p>

                    <div className="mb-24 flex gap-4">
                        <button>
                            <Image
                                src="/assets/btn-apple-store.svg"
                                alt="Apple Store"
                                width={180}
                                height={180}
                            />
                        </button>
                        <button>
                            <Image
                                src="/assets/btn-google-play.svg"
                                alt="Google Play"
                                width={180}
                                height={180}
                            />
                        </button>
                    </div>

                    <button className="flex items-center gap-3">
                        <Image
                            src="/assets/arrow-explorer.svg"
                            alt="Arrow explorer"
                            width={10}
                            height={10}
                        />
                        <span className="text-sm font-bold text-white">
                            Continue explorando
                        </span>
                    </button>
                </div>

                <Image
                    src="/assets/woman.png"
                    alt="Woman"
                    className="mr-[-41px]"
                    width={703}
                    height={703}
                />
            </Container>
        </section>
    );
};
