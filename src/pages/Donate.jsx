import React, { useState } from 'react';
import { Heart, CreditCard, Gift, Users, CheckCircle, Loader2, X } from 'lucide-react'; // Import icons
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router'; // Import useNavigate for navigation
import JoyfulChild from '../assets/image/joyful_child.jpg'; // Import your image
import ParticleBg from '../particleBg'

const DonationPage = ({ setShowDonate }) => {
    const [donation, setDonation] = useState({
        amount: 10, // Default amount
        name: '',
        email: '',
        message: '',
        
    });
    const url = "http://localhost:4000"
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonation({ ...donation, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setDonation({ ...donation, paymentMethod: value });
    };

    const handleAmountChange = (e) => {
        setDonation({ ...donation, amount: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setDonation({ ...donation, [name]: checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');
        setErrorMessage('');

        // Basic validation
        if (!donation.name.trim() || !donation.email.trim()) {
            setErrorMessage('Please enter your name and email.');
            setIsSubmitting(false);
            setSubmissionStatus('error');
            return;
        }

        // Simulate an API call with a delay
        try {
           const response = await axios.post(url + '/api/donate', donation);
            // Simulate success or failure (replace with actual logic)
            
            if (response.data.authorization_url) {
                setSubmissionStatus('success');
                setDonation({ // Reset the form
                    amount: 25,
                    name: '',
                    email: '',
                    message: '',
                    
                    
                });
            window.location.href = response.data.authorization_url;
            } else {
                setSubmissionStatus('error');
                setErrorMessage('Something went wrong. Please try again.'); // Generic error
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage(error.message || 'An unexpected error occurred.');
            console.log('Error during donation:', error); // Log the error for debugging
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=" z-[1] fixed flex flex-col h-screen  justify-center items-center w-full bg-[rgba(24,22,22,0.5)]  ">

            <div className="bg-white overflow-y-scroll  shadow-2xl rounded-2xl max-w-lg w-full p-8">
                <div className='flex justify-between text-green-500 items-center mb-4'>


                    <h1 className="text-3xl font-bold mb-6 text-center ">
                        <Heart className="inline-block mr-2" size={32} /> Help  make a difference 

                    </h1>
                    <X className="cursor-pointer" size={24} onClick={() => setShowDonate(false)} />
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Your Name
                        </label>
                        <input
                            name="name"

                            type="text"
                            value={donation.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Your Email
                        </label>
                        <input
                            name="email"

                            type="email"
                            value={donation.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium" >
                            Donation Amount ($)
                        </label>
                        <input
                            name="amount"
                            type="number"
                            step={1}
                            value={donation.amount}
                            onChange={handleAmountChange}
                            placeholder="Enter amount"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Message (optional)
                        </label>
                        <textarea
                            name="message"
                            value={donation.message}
                            onChange={handleInputChange}
                            placeholder="Write a message..."
                            rows={4}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition duration-300"
                    >
                        Proceed to Payment
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Thank you for your support!
                </p>
            </div>


        </div>

    );
};

export default DonationPage;
