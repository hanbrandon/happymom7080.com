'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const t = useTranslations('Footer'); // We can use Footer namespace for basic titles if needed, or add a Terms one.

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
              Terms of Use
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">1. 서비스 이용 안내</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  해피맘(HappyMom)이 제공하는 모든 서비스는 산모님과 신생아의 건강 회복 및 안정을 최우선으로 합니다. 
                  고객님은 서비스 신청 시 정확한 출산 예정일과 건강 상태를 제공해야 하며, 변동 사항 발생 시 즉시 당사에 통보해야 합니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">2. 산후관리사 매칭 및 업무 범위</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  당사는 산모님의 성향과 요청사항을 반영하여 최적의 산후관리사를 매칭합니다. 
                  산후관리사의 주요 업무는 산모 케어, 신생아 케어, 가사 지원(산모/신생아 관련)으로 한정되며, 일반 가사도우미와는 차별화된 전문 서비스를 제공합니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">3. 예약 및 결제 정책</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  서비스 확정은 계약금 입금 시점을 기준으로 합니다. 잔금은 서비스 시작 전 당사가 안내한 기한 내에 결제되어야 합니다. 
                  결제는 은행 송금 및 당사가 지정한 결제 수단을 통해 가능합니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">4. 취소 및 환불 규정</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  상세한 환불 규정은 이용 금액 페이지 하단의 '환불 정책'을 따릅니다. 
                  단순 변심으로 인한 취소 시 예약금 반환이 불가할 수 있으니 신중하게 결정해 주시기 바랍니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">5. 의무 및 책임 제한</h3>
                <p className="text-lg text-gray-500 leading-relaxed break-keep">
                  당사는 파견된 인력의 신원 보증 및 전문 교육을 책임집니다. 
                  다만, 서비스 이용 중 발생한 건강상의 특이 체질이나 기저 질환으로 인한 문제에 대해서는 의학적 책임의 한계가 있을 수 있음을 인지하여 주시기 바랍니다.
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
