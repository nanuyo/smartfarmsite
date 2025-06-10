"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Cloud,
  BarChart3,
  Star,
  CheckCircle,
  Monitor,
  Database,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Play,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DemoModal } from "@/components/demo-modal"

export default function IMSLanding() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/ims-logo.jpg"
                alt="IMS Electronics Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors">
                솔루션
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                기능
              </Link>
              <Link href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
                효과
              </Link>
              <Link href="#cases" className="text-gray-600 hover:text-gray-900 transition-colors">
                사례
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                문의
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="https://open.kakao.com/o/gw2FGRAh" target="_blank" rel="noopener noreferrer">
                  상담
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                  🌱 최첨단 농업 기술
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  이미지 기반
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}
                    스마트팜
                  </span>
                  <br />
                  솔루션
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  최첨단 이미지 기반 식물 생장 모니터링 시스템으로 연구 효율을 극대화하고, 정밀한 생육 데이터 분석을
                  통해 농업 연구의 새로운 패러다임을 제시합니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://open.kakao.com/o/gw2FGRAh" target="_blank" rel="noopener noreferrer">
                    상담 신청
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  데모 영상 보기
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>초기 상담</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>맞춤형 설계</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>전문 기술지원</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/smart-farm-system.png"
                  alt="IMS 스마트팜 시스템 - LED 조명과 자동화된 식물 재배 시설"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-800">
              솔루션 개요
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">혁신적인 식물 생장 모니터링</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              재배기 상단 및 측면에 다중 카메라를 설치하여 일정 시간 간격으로 식물의 생장 이미지를 촬영하고, 이를 서버로
              전송·저장·분석하는 통합 시스템입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">다중 카메라 설치</CardTitle>
                <CardDescription>상단 및 측면 카메라를 통한 360도 식물 생장 모니터링</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-indigo-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-indigo-900">자동 촬영 시스템</CardTitle>
                <CardDescription>시간 간격 기반 자동 촬영 및 실시간 서버 전송</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">클라우드 저장</CardTitle>
                <CardDescription>안전한 클라우드 기반 데이터 저장 및 관리 시스템</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">분석 및 보고서</CardTitle>
                <CardDescription>이미지 기반 생장 분석 및 맞춤형 보고서 제공</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-800">
              주요 기능
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">상세 기능 소개</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">연구 효율성을 극대화하는 핵심 기능들을 소개합니다</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">정밀한 이미지 캡처</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>고해상도 카메라를 사용한 선명한 생장 과정 기록</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>상단 및 측면 이미지를 통한 3D 형태의 생육 파악</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>다양한 각도에서의 종합적인 생장 분석</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">자동 데이터 관리</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>자동 전송 및 안전한 서버 저장</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>데이터 중복 방지 및 보안 관리</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>체계적인 데이터 분류 및 백업 시스템</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">분석 및 시각화</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>식물 생장 추적 그래프 및 보고서 자동 생성</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>연구자별 맞춤형 데이터 분석</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>직관적인 시각화 도구 및 리포트 제공</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-800">
              기대 효과
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">도입 효과 및 장점</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">IMS 스마트팜 솔루션이 가져다주는 혁신적인 변화</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">연구 효율 극대화</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 반복 측정 및 기록 업무 자동화</li>
                  <li>• 연구자들이 분석에만 집중할 수 있도록 지원</li>
                  <li>• 시간과 인력 절약을 통한 비용 효율성</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">데이터 기반 연구</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 정확한 이미지 데이터 기반 생육 분석</li>
                  <li>• 연구의 정밀성 및 객관성 확보</li>
                  <li>• 과학적 근거에 기반한 의사결정</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">연구 성과 향상</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 축적된 데이터 활용한 연구 방향성 개선</li>
                  <li>• 연구 품질 및 신뢰성 향상</li>
                  <li>• 혁신적인 농업 기술 개발 가속화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-800">
              설치 사례
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">검증된 성공 사례</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              이미 국내 대기업 연구소 및 농업 R&D 센터에서 성공적으로 운영 중입니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "IMS 스마트팜 솔루션 도입 후 연구 효율이 300% 향상되었습니다. 자동화된 데이터 수집으로 연구자들이
                  분석에만 집중할 수 있게 되었어요."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">김연구 박사</p>
                    <p className="text-sm text-gray-600">A그룹 농업연구소</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "정밀한 이미지 분석 기능이 정말 인상적입니다. 3D 형태의 생육 데이터를 통해 이전에는 놓쳤던
                  세부사항까지 파악할 수 있게 되었습니다."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">이기술 연구원</p>
                    <p className="text-sm text-gray-600">B기업 R&D센터</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "맞춤형 설계와 전문적인 기술지원이 매우 만족스럽습니다. 우리 연구소의 특성에 완벽하게 맞춘 시스템을
                  구축해주셨어요."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">박농업 교수</p>
                    <p className="text-sm text-gray-600">C대학교 농생명과학대학</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">농업 연구의 혁신을 시작하세요</h2>
            <p className="text-xl text-blue-100">
              IMS 스마트팜 솔루션으로 귀하의 연구소 경쟁력을 강화하고, 데이터 기반의 정밀한 농업 연구를 경험해보세요.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-50"
                asChild
              >
                <Link href="https://open.kakao.com/o/gw2FGRAh" target="_blank" rel="noopener noreferrer">
                  상담 신청
                </Link>
              </Button>
            </div>
            <p className="text-sm text-blue-200">초기 상담 무료 • 맞춤형 설계 • 전문 기술지원 • 설치 후 관리</p>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/ims-logo.jpg"
                  alt="IMS Electronics Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">이미지 기반 스마트팜 솔루션으로 농업 연구의 새로운 패러다임을 제시합니다.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">솔루션</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    스마트팜 시스템
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    이미지 분석
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    데이터 관리
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    기술지원
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    기술블로그
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    채용정보
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    파트너십
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">문의 및 상담</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>010-3977-6421</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hj.park@ims-elec.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>경기 화성시 동탄대로 24길 31-8</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 IMS Electronics. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                쿠키정책
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  )
}
