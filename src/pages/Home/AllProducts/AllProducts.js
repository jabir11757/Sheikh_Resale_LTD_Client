import React from "react";
import Yamaha from "../../../images/yamaha-155.jpg"
import BG1 from "../../../images/bg-now.jpg"
import BG2 from "../../../images/full-bg.png"
import BG3 from "../../../images/guidebanner.png"
import BG4 from "../../../images/inbg.png"

const AllProducts = () => {

    const images = [
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        },
        {
            image: Yamaha
        }
    ]

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">All Available Products</h1>
            <section className="py-6">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={BG2} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    {
                        images.map(img =>
                            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 aspect-square" src={img?.image} />
                        )
                    }
                    <img src={BG2} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    )
}

export default AllProducts;