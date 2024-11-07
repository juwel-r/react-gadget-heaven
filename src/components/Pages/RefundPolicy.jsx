import React from 'react';

const RefundPolicy = () => {
document.title="Refund Policy | Gadget Heaven"

return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">Refund Policy</h1>

      <div className="space-y-8 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Refund Eligibility</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>The item must be unused and in the same condition that you received it.</li>
            <li>The item must be in the original packaging.</li>
            <li>Proof of purchase (receipt or order confirmation) must be provided.</li>
          </ul>
          <p className="text-gray-600 italic mt-2">*Certain items, such as [mention items], are exempt from refunds.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Refund Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Contact us at <span className="text-primary font-medium">[contact email or phone number]</span> within 30 days of receiving your order.</li>
            <li>Follow the return instructions provided after approval.</li>
            <li>Return shipping costs are the customer’s responsibility, unless the item was damaged or defective.</li>
            <li>After receiving and inspecting the item, we’ll process your refund.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Refunds</h2>
          <p className="text-gray-700">
            <span className="font-medium">Method:</span> Refunds will be processed to the original payment method.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Processing Time:</span> Please allow 5-10 business days for funds to appear in your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Late or Missing Refunds</h2>
          <p className="text-gray-700">
            If you haven’t received your refund, please:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Check with your bank or card provider, as processing times may vary.</li>
            <li>If you still have not received it, contact us at <span className="text-primary font-medium">[contact email or phone number]</span>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Exchanges</h2>
          <p className="text-gray-700">
            We only replace items if they are defective or damaged. To request an exchange, please reach out to us at <span className="text-primary font-medium">[contact email or phone number]</span>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Sale Items</h2>
          <p className="text-gray-700">
            Only regular-priced items may be refunded; sale items are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-700">If you have questions or need assistance with your refund, please contact us:</p>
          <div className="text-gray-700 mt-2 w-4/6 mx-auto border rounded-xl p-4">
            <div className='grid grid-cols-2 gap-4'>
                <input className='focus:out outline-primary/40 border p-2 rounded-lg' type="text" placeholder='Email' />
                <input className='focus:out outline-primary/40 border p-2 rounded-lg' type="text" placeholder='Name'/>
                <textarea className='focus:out outline-primary/40 border p-2 rounded-lg col-span-2' type="text" placeholder='Any Query?' name="" id=""  rows="5"></textarea>
                <button className='buttonColor col-span-2 rounded-full py-2 btn'>Submit</button>
            </div>
          </div>
        </section>

        <section className="text-center text-gray-500 text-sm mt-8">
          *This policy is subject to change without notice. Please review this page periodically for updates.
        </section>
      </div>
    </div>
  );
};
export default RefundPolicy;