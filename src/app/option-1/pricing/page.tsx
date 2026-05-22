import { Check } from 'lucide-react';

export default function Option1Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$375',
      desc: 'Essential tools for career discovery.',
      features: ['Ideal job sets', 'Quarterly reviews', 'Unlimited training library access', 'Monthly Newsletter'],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      price: '$750',
      desc: 'Accelerate your career trajectory.',
      features: ['2 Career Counseling sessions', 'Weekly industry communication', 'Unlimited training library access', 'All Basic features'],
      buttonText: 'Upgrade to Premium',
      popular: true
    },
    {
      name: 'Superior',
      price: '$1500',
      desc: 'The ultimate executive mobility package.',
      features: ['Unlimited counseling', 'Exclusive branding', 'Advisory board access', 'All Premium features'],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Invest in your career with a plan that fits your current stage and future goals.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`bg-white rounded-2xl border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl' : 'border-gray-200 shadow-sm'} p-8 relative flex flex-col`}>
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-6 h-10">{plan.desc}</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              <span className="text-gray-500 font-medium">/yr</span>
            </div>

            <button className={`w-full py-3 rounded-lg font-medium mb-8 transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
              {plan.buttonText}
            </button>

            <ul className="space-y-4 flex-1">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
