'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-48 pb-20 bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">Legal</span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-[1.1] mb-8">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">1. 수집하는 개인정보 항목</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  해피맘은 원활한 산후조리 서비스 제공을 위해 다음과 같은 최소한의 개인정보를 수집합니다.
                </p>
                <ul className="mt-4 list-disc pl-6 text-lg text-gray-500 space-y-2">
                  <li>성명, 연락처, 이메일 주소</li>
                  <li>거주 지역 및 서비스 제공 주소</li>
                  <li>출산 예정일, 자녀 수, 건강상의 특이사항</li>
                  <li>보험 청구를 위한 관련 정보 (필요 시)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">2. 개인정보의 수집 및 이용 목적</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  수집된 정보는 서비스 예약 확정, 최적의 관리사 매칭, 고객 상담 및 만족도 조사, 그리고 보험 청구 서류 지원을 위해서만 엄격히 사용됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">3. 개인정보의 보유 및 이용 기간</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  고객님의 개인정보는 서비스 제공 기간 동안 보유하며, 서비스 종료 후 관련 법령에 의거하여 일정 기간(최대 5년) 보관 후 안전하게 파기합니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">4. 제3자 제공에 관한 사항</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  해피맘은 고객님의 동의 없이 개인정보를 외부 제3자에게 제공하지 않습니다. 
                  단, 매칭된 산후관리사에게 서비스 수행을 위한 필수 정보(성함, 주소, 특이사항)를 공유하는 것에 대해 동의한 것으로 간주합니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">5. 개인정보 보호를 위한 노력</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  당사는 고객님의 정보를 보호하기 위해 최신 보안 기술을 적용하며, 관리 인력에 대한 정기적인 보안 교육을 실시하여 소중한 정보가 유출되지 않도록 최선을 다합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
