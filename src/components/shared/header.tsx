import { cn } from "../../../lib/utils";
import Image from 'next/image'
import { Button } from "../ui/lib";
import { ArrowRight, ShoppingBag, User } from "lucide-react";
import { Container } from "./lib";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                {/* left side */}
                <div className="flex items-center gap-4">
                    <Image src={"/shopIcon.png"} alt="Logo" width={35} height={35}/>

                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Shop</h1>
                        <p className="text-sm text-gray-400 leading-3">good choice!!</p>
                    </div>
                </div>
                {/* right side */}
                <div className="flex items-center gap-3">
                    <Button variant={"outline"} className="flex items-center gap-2"> 
                        <User size={16}/>
                        Log in
                    </Button>

                    <div>
                        <Button className="group relative"> 
                            <b>999 $</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>

                            <div className="flex items-center gap-1 duration-300 group-hover:opacity-0">
                                <ShoppingBag size={16} className="relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
