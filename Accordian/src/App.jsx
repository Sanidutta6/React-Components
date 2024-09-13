import Accordian from "./components/Accordian"

const faqContent = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition and packaging. Please keep your receipt as proof of purchase."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to over 100 countries. Shipping costs and delivery times will vary depending on the destination and shipping method chosen at checkout."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has been shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order by logging into your account on our website."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. Please ensure your payment details are entered correctly to avoid delays."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button at the top right corner of the website. Fill in your details and submit the form. You will receive a confirmation email to verify your account."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team by clicking on the 'Contact Us' link at the bottom of the page or by calling our support hotline at 1-800-123-4567. Our team is available 24/7 to assist you."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "If you need to change or cancel your order, please contact us within 24 hours of placing it. Once the order has been processed and shipped, we are unable to make any changes."
  },
  {
    question: "Do you have a loyalty program?",
    answer: "Yes, we have a loyalty program that rewards you with points for every purchase. You can redeem these points for discounts on future purchases. Sign up for our newsletter to learn more about our loyalty program and exclusive offers."
  }
];

function App() {
  return (
    <main className="min-h-dvh w-full p-5 bg-slate-900 text-slate-300">
      <h1 className="text-center text-4xl tracking-tight font-semibold mb-5">Accordian</h1>
      <Accordian content={faqContent} />
    </main>
  )
}

export default App
