import { useState } from 'react';


function JoinEvent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#051622] min-h-screen flex flex-col items-center px-4">
            {/* Logo Section */}
            <div className="text-center mb-2">
                <img
                    src="src\\assets\\logo2-BByECSNC.svg"
                    alt="GamingPE Logo"
                    className="h-70 w-70"
                />
            </div>

            {/* Join Event Section */}
            <div className="w-full max-w-4xl">
                <h2 className="text-5xl font-bold mb-12 text-center">
                    <span className="text-[#a8e6cf]">JOIN OUR</span>
                    <span className="text-white"> EVENT</span>
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-between gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name *"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name *"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                            required
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-between gap-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                        />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-between gap-4">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                        />
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="w-full md:w-[425px] px-4 py-3 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-gray-400 focus:outline-none focus:border-[#4CAF50]"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="px-10 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors duration-300 uppercase"
                        >
                            Join!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default JoinEvent;
