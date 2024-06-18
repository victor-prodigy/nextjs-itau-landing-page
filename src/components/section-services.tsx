import Image from "next/image";
import { Container } from "./container";

export const SectionServices = () => {
    return (
        <section className="relative h-[965px] w-full">
            <Container>
                <div className="max-w-[594px] flex-1 pt-24">
                    <span className="text-primary-orange mb-9 block text-sm font-bold">
                        serviços exclusivos
                    </span>
                    <h2 className="text-primary-gray mb-6 text-[56px] font-bold leading-tight">
                        Gerencie suas finanças sem sair de casa
                    </h2>
                    <p className="text-second-gray mb-16 max-w-[554px] text-lg">
                        Veja como você pode cuidar das suas finanças pelo app
                        Itaú de forma segura, rápida e o melhor, no conforto da
                        sua casa.
                    </p>

                    <ul className="flex flex-col items-start gap-9">
                        <li className="border-opacity-gray flex items-center gap-9 border-b-[1px] pb-9">
                            <div className="flex h-7 w-7 items-center justify-center">
                                <Image
                                    src="/assets/icon-phone.svg"
                                    alt="Icon phone"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <p className="text-txt-gray flex-1 pr-2">
                                Acompanhar sua conta, fazer transferências e
                                pagamentos de onde estiver
                            </p>
                        </li>

                        <li className="border-opacity-gray flex items-center gap-9 border-b-[1px] pb-9">
                            <div className="flex h-7 w-7 items-center justify-center">
                                <Image
                                    src="/assets/icon-solutions.svg"
                                    alt="Icon phone"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <p className="text-txt-gray flex-1 pr-2">
                                Soluções de empréstimos e renegociação para
                                organizar suas finanças
                            </p>
                        </li>

                        <li className="border-opacity-gray flex items-center gap-9 border-b-[1px] pb-9">
                            <div className="flex h-7 w-7 items-center justify-center">
                                <Image
                                    src="/assets/icon-options.svg"
                                    alt="Icon phone"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <p className="text-txt-gray flex-1 pr-2">
                                Diversas opções de investimentos, de acordo com
                                o seu perfil de investidor
                            </p>
                        </li>

                        <li className="border-opacity-gray flex items-center gap-9">
                            <div className="flex h-7 w-7 items-center justify-center">
                                <Image
                                    src="/assets/icon-card.svg"
                                    alt="Icon phone"
                                    width={15}
                                    height={15}
                                />
                            </div>
                            <p className="text-txt-gray flex-1 pr-2">
                                Acompanhe a fatura do seu cartão de crédito e
                                faça compras online com seu cartão virtual.
                            </p>
                        </li>
                    </ul>
                </div>
            </Container>

            <div className="bg-gray-phone absolute right-0 top-0 flex h-full w-[32%] items-center">
                <Image
                    src="/assets/phone.png"
                    alt="Phone"
                    width={327}
                    height={700}
                    className="translate-x-[-50%]"
                />
            </div>
        </section>
    );
};
