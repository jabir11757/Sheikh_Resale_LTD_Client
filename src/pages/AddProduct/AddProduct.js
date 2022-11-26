import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();




    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        name: data.name,
                        email: data.email,
                        condition: data.condition,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/manageProducts')
                        })
                }
            })
    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'> Add Products</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Name</span> </label>
                    <input type="productName" {...register("productName", {
                        required: "Name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original Price</span> </label>
                    <input type="text" {...register("originalPrice", {
                        required: "Email is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale Price</span> </label>
                    <input type="text" {...register("resalePrice", {
                        required: "Email is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Choose Condition</span> </label>
                    <select className="select input-bordered w-full max-w-xs" {...register("condition")}>

                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Mobile Number</span> </label>
                    <input type="text" {...register("mobileNumber", {
                        required: "Email is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span> </label>
                    <input type="text" {...register("location", {
                        required: "Email is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Purchase Year</span> </label>
                    <input type="text" {...register("purchaseYear", {
                        required: "Email is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchaseYear && <p className='text-red-600'>{errors.purchaseYear?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span> </label>
                    <input type="file" {...register("image", {
                        required: "Photo is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent mt-5 w-full' value='Add Product' type='submit' />
            </form>
        </div>
    );
};

export default AddProduct;