import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpen, Users } from 'lucide-react';

export default function Option1Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      <section className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Elevate Your Career Trajectory
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          CareerFlyght is the ultimate platform for executive mobility, mentoring, and strategic career growth.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/option-1/dashboard" className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/option-1/pricing" className="px-8 py-3 rounded-lg bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
            View Plans
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Assessment</h3>
          <p className="text-gray-600">Map your competencies against industry benchmarks and identify areas for growth.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentoring</h3>
          <p className="text-gray-600">Connect with top-tier executives who have walked the path you are on.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Resources</h3>
          <p className="text-gray-600">Access our library of artisanal content, workbooks, and training programs.</p>
        </div>
      </section>
    </div>
  );
}
