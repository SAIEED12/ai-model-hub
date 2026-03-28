import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        const isFound = carts.find(item => item.id === model.id);
        
        if (isFound) {
            toast.error("Item already subscribed!");
            return;
        }

        setIsSubscribed(true);
        setCarts([...carts, model]);
        toast.success("Item Added to Cart!");
    };

    return (
        <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300 h-125 flex flex-col">
            
            <div className="flex justify-center items-center h-56 bg-amber-100 shrink-0">
                <img className="h-40 w-40 object-contain" src={model.image} alt={model.title} />
            </div>
            <div className="p-4 space-y-3 grow flex flex-col">
                <h2 className="text-2xl font-bold">{model.title}</h2>
                
                <p className="text-white line-clamp-3">{model.description}</p>
                
                <div className="font-semibold text-lg">${model.price}/month</div>
                <button 
                    onClick={handleSubscription} 
                    className={`btn w-full text-white rounded-lg mt-auto py-3 transition-colors ${
                        isSubscribed ? "bg-green-600 hover:bg-green-700" : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>

        </div>
    );
};

export default ModelCard;