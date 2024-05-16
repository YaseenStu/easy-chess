import React from 'react';

const PrivacyPage = () => {
    return (
        <div className="container mx-auto px-6 py-4 flex justify-center">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-xl">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        We respect your privacy and do not collect any personal data from our users. The only information we may handle is your IP address, which remains secure and protected since our website is hosted on Netlify.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
