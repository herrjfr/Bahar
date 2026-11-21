
import React from 'react'

function BrendsPage() {

    const createBrands = (prefix, count, startId) => {
        return Array.from({ length: count }, (_, i) => ({
            id: startId + i,
            img: `/src/assets/brendspages/${prefix}${i + 1}.png`
        }))
    }

    const allBrends = {
        a: createBrands("a", 8, 1),
        b: createBrands("b", 10, 9),
        c: createBrands("c", 6, 19),
        d: createBrands("d", 5, 25),
        e: createBrands("e", 4, 30),
        f: createBrands("f", 8, 34),
        g: createBrands("g", 5, 42),
        i: createBrands("i", 3, 47),
        j: createBrands("j", 6, 50),
        k: createBrands("k", 1, 56),
        l: createBrands("l", 11, 57),
        m: createBrands("m", 8, 68),
        n: createBrands("n", 6, 76),
        o: createBrands("o", 4, 82),
        p: createBrands("p", 6, 86),
        q: createBrands("q", 1, 92),
        r: createBrands("r", 6, 93),
        s: createBrands("s", 16, 99),
        t: createBrands("t", 7, 115),
        v: createBrands("v", 6, 122),
        w: createBrands("w", 4, 128),

        "В": createBrands("bb", 1, 132),
        "К": createBrands("kk", 1, 133),
        "М": createBrands("mm", 2, 134)
    }



    return (
        <div className="w-full">

            <div className="max-w-[1240px] mx-auto pt-5">

                {/* Basliq */}
                <div className="text-center mb-10">
                    <h1 className="text-[29px] font-semibold">
                        Brendlər
                    </h1>


                    <p className="text-[13px] mt-1 flex items-center justify-center gap-2">
                        <span className="relative inline-block cursor-pointer group pb-1">
                            <span className="group-hover:text-[#EA0B17] transition-colors duration-300 font-normal">
                                Bahar Store
                            </span>

                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EA0B17] group-hover:w-full transition-all duration-300"></span>
                        </span>

                        <span>/</span>

                        <span className="text-gray-400 cursor-default text-[12px]">
                            Brendlər
                        </span>
                    </p>

                </div>

                {/* Herfler */}
                <div className="flex items-center bg-[#f4f4f4] rounded-md px-1 py-1 mb-12">

                    <button className="bg-[#191919] text-white rounded-md px-4 py-3 text-[12px] font-medium cursor-pointer hover:bg-black hover:text-white transition duration-300 shrink-0">
                        Hamısı
                    </button>

                    <div className="flex-1 flex items-center justify-between">
                        {Object.keys(allBrends).map((letter) => (
                            <button
                                key={letter}
                                className="px-4 py-3 text-[15px] font-medium cursor-pointer hover:bg-black hover:text-white hover:rounded-md transition duration-300"
                            >
                                {letter.toUpperCase()}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Umumi say */}
                <p className="text-[15px] font-medium text-[#444] mb-6">
                    {Object.values(allBrends).flat().length} brend
                </p>

                <div className="border-b border-[#e9e4e4] mb-8"></div>

                {/* Brendler */}
                <div>
                    {Object.entries(allBrends).map(([letter, brands]) => (

                        <div
                            key={letter}
                            className="flex items-start border-b border-[#e9e4e4] py-8"
                        >

                            {/* Herf */}
                            <div className="w-[80px] shrink-0 text-[20px] font-semibold text-gray-300">
                                {letter.toUpperCase()}
                            </div>

                            {/* Brend logolari */}
                            <div className="flex-1 grid grid-cols-6 gap-x-4 gap-y-8">

                                {brands.map((x) => (
                                    <div
                                        key={x.id}
                                        className="flex flex-col items-center justify-center gap-6 cursor-pointer"
                                    >
                                        <div className="w-full h-[85px] flex items-center justify-center">
                                            <img
                                                src={x.img}
                                                alt="Brand"
                                                className="max-w-[170px] max-h-[70px] object-contain"
                                            />
                                        </div>

                                        <p className="text-[11px] text-gray-500">
                                            {/* Mehsul sayi sonra elave olunacaq */}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>

                    ))}
                </div>

            </div>

        </div>
    )


}

export default BrendsPage
