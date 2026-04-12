import Playlist from "../Playlist";
import Laptop from "../Laptop";

export default function FunCornerSection() {
    return (
        <section id="fun" className="mt-20 m-auto w-auto h-[600px]">
            <h3 className="text-4xl font-light text-center mb-16">Code Jam Corner</h3>
            <div className="flex justify-center">
                <Playlist />
                <div className="relative group w-[600px] h-[485px] hidden md:block">
                    <p className="pointer-events-none absolute top-2 left-4 z-10 text-silver opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Click on the laptop and press WASD!
                    </p>
                    <div className="absolute inset-0">
                        <Laptop />
                    </div>
                </div>
            </div>
        </section>
    );
}
