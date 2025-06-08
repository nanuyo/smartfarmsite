"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const demoImages = [
  {
    src: "/images/demo/smart-farm-side-view.jpg",
    title: "스마트팜 시설 전경",
    description: "LED 조명 시스템과 체계적인 식물 재배 환경",
  },
  {
    src: "/images/demo/ceiling-cameras.jpg",
    title: "다중 카메라 시스템",
    description: "천장에 설치된 다수의 모니터링 카메라들",
  },
  {
    src: "/images/demo/camera-system.jpg",
    title: "모니터링 카메라",
    description: "레일 시스템에 장착된 이동식 카메라",
  },
  {
    src: "/images/demo/camera-closeup.jpg",
    title: "카메라 상세 뷰",
    description: "LED 조명과 함께 설치된 고해상도 카메라",
  },
  {
    src: "/images/demo/plant-measurement.jpg",
    title: "식물 생장 측정",
    description: "정밀한 생장 데이터 수집을 위한 측정 과정",
  },
]

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % demoImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length)
  }

  const currentImage = demoImages[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">IMS 스마트팜 시스템 데모</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col p-6">
          <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.title}
              fill
              className="object-cover"
            />

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Info */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{currentImage.title}</h3>
            <p className="text-gray-600 mb-4">{currentImage.description}</p>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {demoImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-green-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Progress */}
            <p className="text-sm text-gray-500 mt-2">
              {currentIndex + 1} / {demoImages.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
