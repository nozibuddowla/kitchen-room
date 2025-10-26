import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';
import CookingCard from './Cards/CookingCard';
import { Slide, toast} from 'react-toastify';

const OrderContainer = ({promise}) => {
    const orders = use(promise);

    const [cookingItems, setCookingItems] = useState([]);

    const handleOrder = (order) => {
        // console.log(order);
        const isExistCooking = cookingItems.find(item => item.id === order.id);
        if(isExistCooking) {
            toast.warn("Already Cooking!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
                });
            return;
        }
        

        const newCookingItems = [...cookingItems, order];

        setCookingItems(newCookingItems);
    }
    console.log(cookingItems);
    
    
    return (
        <div>
            <States totalOrder={orders.length} totalCooking={cookingItems.length} />
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className="lg:col-span-7">
                    <h3 className='font-bold text-4xl'>Current Orders</h3>
                    <div className='space-y-5'>
                        {
                            orders.map(item => <OrderCard key={item.id} order={item} handleOrder={handleOrder} />)
                        }
                    </div>
                </div>
                <div className="lg:col-span-5 space-y-5">
                    <h3 className='font-bold text-4xl'>Cooking</h3>
                    <div className="shadow p-10 space-y-5">
                        {
                            cookingItems.map((order, orderId) => <CookingCard key={orderId} order={order} > {order.order_title} </CookingCard> )
                        }

                    </div>
                    <h3 className='font-bold text-4xl'>Ready to Serve</h3>
                    <div className="shadow p-10">

                    </div>
                </div>
            </section>

        </div>
    );
};

export default OrderContainer;