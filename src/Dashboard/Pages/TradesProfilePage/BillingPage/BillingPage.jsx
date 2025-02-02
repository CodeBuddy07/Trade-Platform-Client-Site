import { useState } from 'react';
import PaymentMethod from './Components/PaymentMethod';
import Invoice from './Components/Invoice';
import Charges from './Components/Charges';
import History from './Components/History';

const BillingPage = () => {
  const [activeTab, setActiveTab] = useState('payment-methods');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSaveCard = () => {
    // Logic to save card (this is a placeholder for functionality)
    alert('Card saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      {/* Tabs */}
      <div className="flex space-x-8 mb-8 border-b border-gray-200 pb-4">
        <button
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'payment-methods'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab('payment-methods')}
        >
          Payment Methods
        </button>
        <button
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'invoices'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab('invoices')}
        >
          Invoices
        </button>
        <button
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'charges'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab('charges')}
        >
          Charges
        </button>
        <button
          className={`py-2 px-6 text-lg font-medium ${
            activeTab === 'history'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'payment-methods' && (
          <PaymentMethod/>
        )}

        {activeTab === 'invoices' && (
         <Invoice/>
        )}

        {activeTab === 'charges' && (
          <Charges/>
        )}

        {activeTab === 'history' && (
          <History/>
        )}
      </div>
    </div>
  );
};

export default BillingPage;
