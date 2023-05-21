import React from "react";
import Yamaha from "../../../images/yamaha-155.jpg"
import img1 from "../../../images/bikes/bmw.jpg"
import img2 from "../../../images/bikes/cbr.jpg"
import img3 from "../../../images/bikes/ducati.jpg"
import img4 from "../../../images/bikes/hero.jpg"
import img5 from "../../../images/bikes/honda.jpg"
import img6 from "../../../images/bikes/ktm.jpg"
import img7 from "../../../images/bikes/bmw.jpg"
import img8 from "../../../images/bikes/suzuki.jpg"

const AllProducts = () => {

    const images = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        },
        {
            image: img4
        },
        {
            image: img5
        },
        {
            image: img6
        },
        {
            image: img7
        },
        {
            image: img8
        }
    ]

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">Urgent Sales</h1>
            <section className="py-6">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {/* <div className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">hhhhhhhhhhhhhhhhhhhh</div> */}
                    <img src={Yamaha} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    {
                        images.map(img =>
                            <div>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 aspect-square" src={img?.image} />
                            </div>
                        )
                    }
                    <img src={Yamaha} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    )
}

export default AllProducts;