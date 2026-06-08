"use client";


import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
  Volume2,
  VolumeX,
  MapPin,
  Copy,
  Phone,
  Heart,
  ChevronDown,
  Navigation,
  Image as ImageIcon,
  Sparkles,
  CalendarDays,
  MessageCircle,
  Camera,
  ChevronLeft,
  ChevronRight,


  Car,
  Train,
  Bus,
  Clock,

} from "lucide-react";


type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

const KAKAO_JAVASCRIPT_KEY = "1c15ce720654ad417dcb38d89a2415b8";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const wedding = {
  groom: "강준석",
  bride: "윤선영",
  date: "2027. 01. 30",
  weddingDateISO: "2027-01-30T15:10:00",
  firstMetDateISO: "2026-02-18T00:00:00",
  time: "오후 3시 10분",
  secondTime: "오후 2시 40분",
  venue: "베니르홀",
  hall: "웨딩스퀘어 강변 3층",
  address: "서울 광진구 광나루로56길 85,\n테크노마트",
  intro:
    //"저희 두 사람의 소중한 만남이\n진실한 사랑으로 꽃피어\n오늘 이 자리를 빛내는 결혼식으로 이어졌습니다.\n\n평생 서로를 귀히 여기며\n처음의 설렘과 순수함을 잃지 않고\n존중하고 아껴 나가겠습니다.\n\n여러분의 따뜻한 축복이 함께 한다면\n더할 나위 없는 기쁨으로 간직하겠습니다.",
     "저희 두 사람의 작은 인연이\n서로를 향한 믿음과 사랑으로 자라\n평생을 함께할 약속으로 이어졌습니다.\n\n처음의 설렘을 오래 간직하며\n서로를 아끼고 존중하는 마음으로\n행복한 가정을 이루어 가겠습니다.\n\n귀한 걸음으로 자리를 빛내 주시고\n저희 두 사람의 새로운 시작을\n진심 어린 축복으로 함께해 주시면\n감사하겠습니다.",
  groomFather: "강형진",
  groomMother: "유숙희",
  brideFather: "윤태열",
  brideMother: "최희영",

  groomAccount: "국민 750602-01-234482 강준석",
  groomFatherAccount: "농협 821113~56~085108 강형진",
  groomMotherAccount: "농협 356-0695-5044-13 유숙희",
  brideAccount: "국민 539701-04-021122 윤선영",
  brideFatherAccount: "신한 110-000-000000 윤태열",
  brideMotherAccount: "하나 000-000000-00000 최희영",
  naverMapUrl: "https://naver.me/FdCx2LFq",
  kakaoMapUrl: "https://map.kakao.com/?urlX=521142.99999999936&urlY=1121183.0000000005&urlLevel=3&itemId=23397688&q=%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4%20%EA%B0%95%EB%B3%80&srcid=23397688&map_type=TYPE_MAP",
  googleMapUrl: "https://www.google.com/maps?sca_esv=1dc58019ac9a4f8a&output=search&q=%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4&source=lnms&fbs=ADc_l-bD_nyrjATWBKup7flJ4rea5XFXsPHwMjGsTekJ1HCohBAQ3Hh19DqzlO7wr7YUgTdahuWH974VvSrJs4RQ62KmPakfWcC3PxowH7Qj6U35JfBSoRBAl27CH7o7NicNO6jPYwrbO3-KLu-p6GaC8OMuIWRlspfJasw6AD_0JlwcO_ezT0l8LoAUnAiDGYZhqbvO4u-0rYioEum0W6761pE9KqBTX_ru_NEiTXDKeLnCjlz0JnA&entry=mc&ved=1t:200715&ictx=111",
  heroImage: "/images/main.jpg",
  middleImage: "/images/gallery2.jpg",
  endingImage: "/images/gallery5.jpg",
  mainGallery: [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
],
  gallery: [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
  ],
};


const timeline = [
  {
    date: "처음 만난 날",
    title: "서로의 일상에 들어온 순간",
    text: "우연처럼 시작된 만남이\n어느새 가장 편안한 하루가 되었습니다.",
    image: "/images/gallery1.jpg",
  },
  {
    date: "함께한 시간",
    title: "조금씩 닮아간 우리",
    text: "좋아하는 것과 웃는 순간들이\n하나둘 비슷해졌습니다.",
    image: "/images/gallery2.jpg",
  },
  {
    date: "프로포즈",
    title: "평범한 하루가 특별해진 날",
    text: "익숙한 공간에서\n우리의 약속이 시작되었습니다.",
    image: "/images/gallery3.jpg",
  },
  {
    date: wedding.date,
    title: "새로운 이야기가 시작되는 날",
    text: "소중한 분들 앞에서\n서로의 손을 꼭 잡고 함께 걸어가겠습니다.",
    image: "/images/gallery4.jpg",
  },
];

const petals = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 7 + Math.random() * 6,
  size: 8 + Math.random() * 8,
}));

function daysUntilWedding() {
  const weddingDate = new Date(wedding.weddingDateISO);
  const today = new Date();
  
  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const diff = Math.ceil(
    (weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return diff > 0 ? diff : 0;
}

function getTimeUntilWedding() {
  const weddingDate = new Date(wedding.weddingDateISO);
  const now = new Date();

  let diff = weddingDate.getTime() - now.getTime();

  if (diff < 0) {
    diff = 0;
  }

  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= totalDays * 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  return {
    hours,
    minutes,
    seconds,
  };
}

function getGalleryDotIndex(currentIndex: number, total: number) {
  if (total <= 1) return 0;

  if (currentIndex === 0) return 0;
  if (currentIndex === total - 1) return 4;

  const progress = currentIndex / (total - 1);

  if (progress < 0.4) return 1;
  if (progress < 0.8) return 2;
  if (currentIndex < total - 1) return 3;

  return 4;
}

function getTimeSinceFirstMet() {
  const firstMetDate = new Date(wedding.firstMetDateISO);
  const now = new Date();

  let diff = now.getTime() - firstMetDate.getTime();

  if (diff < 0) {
    diff = 0;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function getCalendarDays() {
  const date = new Date(wedding.weddingDateISO);
  const year = date.getFullYear();
  const month = date.getMonth();
  const weddingDay = date.getDate();

  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();

  const days: {
    day: number;
    currentMonth: boolean;
    isWeddingDay: boolean;
  }[] = [];

  for (let i = startDay - 1; i >= 0; i -= 1) {
    days.push({
      day: prevLastDate - i,
      currentMonth: false,
      isWeddingDay: false,
    });
  }

  for (let day = 1; day <= lastDate; day += 1) {
    days.push({
      day,
      currentMonth: true,
      isWeddingDay: day === weddingDay,
    });
  }

let nextMonthDay = 1;

while (days.length % 7 !== 0) {
  days.push({
    day: nextMonthDay,
    currentMonth: false,
    isWeddingDay: false,
  });

  nextMonthDay += 1;
}

  return {
    year,
    month: month + 1,
    days,
  };
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.18 }}
      variants={fadeUp}
      className={`relative px-6 py-14 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Divider() {
  return <div className="mx-auto my-4 h-px w-16 bg-stone-300" />;
}

function WinterFlakes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flakes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: 5 + Math.random() * 9,
        opacity: 0.35 + Math.random() * 0.45,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        drift1: -18 + Math.random() * 36,
        drift2: -28 + Math.random() * 56,
        drift3: -20 + Math.random() * 40,
        blur: Math.random() > 0.7 ? 1.2 : 0,
        scale: 0.85 + Math.random() * 0.5,
      })),
    []
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {flakes.map((flake) => (
        <motion.span
          key={flake.id}
          initial={{
            y: -40,
            x: 0,
            opacity: 0,
            scale: flake.scale,
          }}
          animate={{
            y: "110vh",
            x: [0, flake.drift1, flake.drift2, flake.drift3],
            opacity: [0, flake.opacity, flake.opacity, 0],
            rotate: [0, 20, -15, 10],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            filter: `blur(${flake.blur}px)`,
          }}
          className="absolute top-0 rounded-full bg-[#fffaf3]/80"
        />
      ))}
    </div>
  );
}

function FallingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          initial={{
            y: -40,
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: [0, 20, -15, 25, -10],
            rotate: [0, 80, 160, 240, 360],
            opacity: [0, 0.75, 0.75, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.75}px`,
          }}
          className="absolute top-0 rounded-[100%_0_100%_0] bg-[#f3b6b8]/80"
        />
      ))}
    </div>
  );
}

function TornEdge({ top = false }: { top?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 z-20 h-10 w-full overflow-hidden ${
        top ? "top-[-1px] rotate-180" : "bottom-[-1px]"
      }`}
    >
      <svg
        viewBox="0 0 430 40"
        preserveAspectRatio="none"
        className="h-full w-full fill-[#fbf8f3]"
      >
        <path d="M0 18 L18 13 L36 21 L55 15 L72 24 L91 16 L109 22 L129 11 L149 20 L168 14 L188 24 L207 12 L226 19 L246 15 L266 23 L286 13 L305 22 L325 16 L344 24 L364 12 L383 20 L403 14 L430 21 L430 40 L0 40 Z" />
      </svg>
    </div>
  );
}

function ImageBox({
  src,
  alt,
  className = "",
  contain = false,
}: {
  src: string;
  alt: string;
  className?: string;
  contain?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${className}`}>
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${contain ? "object-contain" : "object-cover"}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full min-h-[180px] w-full items-center justify-center text-stone-400">
          <ImageIcon className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}

function PhotoFrame({
  src,
  alt,
  className = "",
  rotate = "rotate-0",
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, rotate: 0 }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl shadow-stone-300/30 ${rotate} ${className}`}
    >
      <ImageBox
        src={src}
        alt={alt}
        contain
        className="h-full w-full rounded-[1.5rem]"
      />
    </motion.div>
  );
}

function GalleryImage({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className={`relative overflow-hidden rounded-[1.8rem] bg-stone-100 shadow-sm ${
        index === 0 ? "col-span-2" : ""
      }`}
    >
      <img
        src={src}
        alt={`갤러리 사진 ${index + 1}`}
        className="h-auto w-full object-contain"
      />
    </motion.button>
  );
}

export default function MobileWeddingInvitation() {
  const [copied, setCopied] = useState("");
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [openAccountSide, setOpenAccountSide] = useState<"groom" | "bride" | null>(null);
  const [showGuestbookModal, setShowGuestbookModal] = useState(false);
  const [selectedMapImage, setSelectedMapImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
const [galleryIndex, setGalleryIndex] = useState(0);

const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);
const [showGalleryHint, setShowGalleryHint] = useState(true);
const [showGalleryControls, setShowGalleryControls] = useState(true);

  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const [allGuestbookEntries, setAllGuestbookEntries] = useState<GuestbookEntry[]>([]);
const [guestName, setGuestName] = useState("");
const [guestMessage, setGuestMessage] = useState("");

const audioRef = useRef<HTMLAudioElement | null>(null);
const kakaoMapRef = useRef<HTMLDivElement | null>(null);
const [isMusicOn, setIsMusicOn] = useState(false);

const [isSubmittingGuestbook, setIsSubmittingGuestbook] = useState(false);

  const [timeSinceFirstMet, setTimeSinceFirstMet] = useState(
    getTimeSinceFirstMet()
  );

useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  audio.volume = 0.35;

  const playMusic = async () => {
    try {
      await audio.play();
      setIsMusicOn(true);
    } catch {
      setIsMusicOn(false);
    }
  };

  playMusic();
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSinceFirstMet(getTimeSinceFirstMet());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

useEffect(() => {
  setTimeUntilWedding(getTimeUntilWedding());

  const timer = setInterval(() => {
    setTimeUntilWedding(getTimeUntilWedding());
  }, 1000);

  return () => clearInterval(timer);
}, []);

useEffect(() => {
  const isAnyModalOpen =
    selectedImageIndex !== null ||
    selectedMapImage !== null ||
    showAccountModal ||
    showGuestbookModal;

  const originalBodyOverflow = document.body.style.overflow;
  const originalHtmlOverflow = document.documentElement.style.overflow;

  if (isAnyModalOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  return () => {
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;
  };
}, [selectedImageIndex, selectedMapImage, showAccountModal, showGuestbookModal]);

  useEffect(() => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return;
  }

  const loadGuestbook = async () => {
  const { data, error } = await supabase
    .from("guestbook")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error(error);
    return;
  }

  setGuestbookEntries(data || []);

  const { data: allData, error: allError } = await supabase
    .from("guestbook")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false });

  if (allError) {
    console.error(allError);
    return;
  }

  setAllGuestbookEntries(allData || []);
};

  loadGuestbook();

  const channel = supabase
    .channel("guestbook-realtime")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "guestbook",
      },
      (payload) => {
        const newEntry = payload.new as GuestbookEntry;

        setGuestbookEntries((prev) => {
          if (prev.some((entry) => entry.id === newEntry.id)) {
            return prev;
          }

          return [newEntry, ...prev].slice(0, 3);
        });

setAllGuestbookEntries((prev) => {
  if (prev.some((entry) => entry.id === newEntry.id)) {
    return prev;
  }

  return [newEntry, ...prev];
});

      }
    )
    .subscribe((status) => {
  console.log("guestbook realtime status:", status);
});

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

const [timeUntilWedding, setTimeUntilWedding] = useState({
  hours: 0,
  minutes: 0,
  seconds: 0,
});


  const dday = useMemo(() => daysUntilWedding(), []);
  const calendar = useMemo(() => getCalendarDays(), []);

  const copyText = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1600);
    } catch {
      alert("복사에 실패했어요. 직접 선택해서 복사해주세요.");
    }
  };

const submitGuestbook = async () => {
  const name = guestName.trim();
  const message = guestMessage.trim();

  if (!name) {
    alert("이름을 입력해주세요.");
    return;
  }

  if (!message) {
    alert("축하 메시지를 입력해주세요.");
    return;
  }

  if (name.length > 20) {
    alert("이름은 20자 이내로 입력해주세요.");
    return;
  }

  if (message.length > 300) {
    alert("메시지는 300자 이내로 입력해주세요.");
    return;
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    alert("방명록 설정이 아직 완료되지 않았어요.");
    return;
  }

  try {
    setIsSubmittingGuestbook(true);

    const { error } = await supabase.from("guestbook").insert({
      name,
      message,
    });

    if (error) {
      throw error;
    }

    setGuestName("");
    setGuestMessage("");
    alert("방명록이 등록되었습니다.");
  } catch (error) {
    console.error(error);
    alert("방명록 등록 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.");
  } finally {
    setIsSubmittingGuestbook(false);
  }
};

const toggleMusic = async () => {
  const audio = audioRef.current;

  if (!audio) return;

  if (audio.paused) {
    await audio.play();
    setIsMusicOn(true);
  } else {
    audio.pause();
    setIsMusicOn(false);
  }
};

useEffect(() => {
  const mapKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
  if (!kakaoMapRef.current || !mapKey) return;

  const loadMap = () => {
    const kakao = window.kakao;
    if (!kakao?.maps || !kakaoMapRef.current) return;

    kakao.maps.load(() => {
      const position = new kakao.maps.LatLng(37.5355, 127.0957);

      const map = new kakao.maps.Map(kakaoMapRef.current, {
        center: position,
        level: 3,
      });

      const marker = new kakao.maps.Marker({ position });
      marker.setMap(map);
    });
  };

  const script = document.createElement("script");
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${mapKey}&autoload=false`;
  script.async = true;
  script.onload = loadMap;
  document.head.appendChild(script);
}, []);

const shareInvitation = () => {
  const invitationUrl = "https://junseok-seonyoung-wedding.vercel.app";
  const imageUrl = invitationUrl + "/images/og-image.png";

  // kakao SDK가 로드되지 않았을 경우 링크 복사 안내
  if (!window.Kakao) {
    navigator.clipboard.writeText(invitationUrl);
    alert("카카오 공유 준비 중입니다. 링크를 복사했어요.");
    return;
  }

  // kakao SDK 초기화
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }

  // 공유
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: `${wedding.groom}♡${wedding.bride} 모바일 청첩장`,
      description: "소중한 날, 함께 축복해주시면 감사하겠습니다.",
      imageUrl,
      link: {
        mobileWebUrl: invitationUrl,
        webUrl: invitationUrl,
      },
    },
    buttons: [
      {
        title: "청첩장 보기",
        link: {
          mobileWebUrl: invitationUrl,
          webUrl: invitationUrl,
        },
      },
    ],
  });
};

const copyInvitationUrl = async () => {
  const invitationUrl = "https://junseok-seonyoung-wedding.vercel.app";

  try {
    await navigator.clipboard.writeText(invitationUrl);
    setCopied("invitationUrl");
    setTimeout(() => setCopied(""), 1600);
  } catch {
    alert("주소 복사에 실패했어요. 주소창의 링크를 직접 복사해주세요.");
  }
};

  return (
    <div className="min-h-screen bg-[#e8dfd2] text-stone-800">

    <audio
      ref={audioRef}
      src="/audio/wedding-bgm.mp3"
      loop
      preload="auto"
    />

    <button
      type="button"
      onClick={toggleMusic}
      className="fixed right-4 top-4 z-[999] flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-md backdrop-blur"
    >
      {isMusicOn ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>

      <main className="mx-auto min-h-screen max-w-[430px] overflow-hidden bg-[#fbf8f3] shadow-2xl">
        <section className="relative min-h-screen overflow-hidden bg-stone-900">
          <WinterFlakes />
          <div className="absolute inset-0">
            <ImageBox
              src={wedding.heroImage}
              alt="메인 웨딩 사진"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/70" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 flex min-h-screen flex-col items-center justify-between px-7 py-12 text-center text-white"
          >
            <div className="pt-8">
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ delay: 0.25, duration: 1.1 }}
                className="mb-4 text-xs opacity-90"
              >
                WEDDING INVITATION
              </motion.p>

              <motion.h1
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45, duration: 0.9 }}
  className="font-serif text-[30px] leading-tight tracking-[0.16em] drop-shadow-sm"
>
  {wedding.groom}
  <span className="mx-3 text-[24px] font-light text-white/75">&amp;</span>
  {wedding.bride}
</motion.h1>
            </div>

            <div className="pb-7">
              <div className="mx-auto mb-7 flex items-center justify-center gap-3 text-white/90">
  <span className="h-px w-3 bg-white/40" />
  <span className="text-xs tracking-[0.25em]">D-{dday}</span>
  <span className="h-px w-3 bg-white/40" />
</div>

              <p className="mb-0.1 text-lg tracking-widest">2027. 01. 30. 토
                </p>
              <p className="text-sm opacity-90">오후 3시 10분</p>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="mt-11 flex justify-center"
              >
                <ChevronDown className="h-7 w-7" />
              </motion.div>
            </div>

            
          </motion.div>


        </section>

        <Section className="text-center">
          <div className="absolute left-8 top-7 text-stone-200">
            <Sparkles className="h-7 w-7" />
          </div>

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            INVITATION
          </p>
          <h2 className="mb-5 font-serif text-2xl">
            소중한 분들을 초대합니다
          </h2>
          <Divider />

          <p className="mx-auto mt-8 max-w-[310px] whitespace-pre-line text-[15px] leading-8 text-stone-600">
            {wedding.intro}
          </p>

          <div className="mt-9 rounded-[2rem] bg-white p-6 text-center shadow-sm">
  <p className="mb-2 text-xs tracking-[0.22em] text-stone-400">
    신랑
  </p>
  <p className="font-serif text-base leading-8 text-stone-700">
  {wedding.groomFather} · {wedding.groomMother}
  <span className="text-xs text-stone-500">의 장남</span>{" "}
  <strong className="font-semibold text-stone-800">
    {wedding.groom}
  </strong>
</p>

  <div className="mx-auto my-5 h-px w-12 bg-stone-200" />

  <p className="mb-2 text-xs tracking-[0.22em] text-stone-400">
    신부
  </p>
  <p className="font-serif text-base leading-8 text-stone-700">
    {wedding.brideFather} · {wedding.brideMother}
    <span className="text-xs text-stone-500">의 차녀</span>{" "}
    <strong className="font-semibold text-stone-800">
      {wedding.bride}
    </strong>
  </p>
</div>


        </Section>

        <Section className="bg-[#fbf8f3] text-center">


          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            WEDDING DAY
          </p>
<h2 className="font-serif text-3xl">
  {calendar.year}. {String(calendar.month).padStart(2, "0")}. 30.

</h2>




          <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
            

           <div className="mb-3 grid grid-cols-7 text-center text-xs">
  {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
    <span
      key={day}
      className={
        index === 0
          ? "text-red-400"
          : index === 6
            ? "text-blue-400"
            : "text-stone-400"
      }
    >
      {day}
    </span>
  ))}
</div>

<div className="grid grid-cols-7 gap-1 text-center text-sm">
  {calendar.days.map((item, index) => {
    const dayOfWeek = index % 7;
    const isSunday = dayOfWeek === 0;
    const isSaturday = dayOfWeek === 6;

    return (
      <div
        key={`${item.day}-${index}`}
        className={`relative flex aspect-square items-center justify-center rounded-full ${
          item.isWeddingDay
                 ? "bg-[#d8b3a2] font-semibold text-white shadow-[0_4px_20px_rgba(160,120,100,0.38)]"
            : item.currentMonth
              ? isSunday
                ? "text-red-400"
                : isSaturday
                  ? "text-blue-400"
                  : "text-stone-700"
              : isSunday
                ? "text-red-200"
                : isSaturday
                  ? "text-blue-200"
                  : "text-stone-300"
        }`}
      >
        
        {item.day}
      </div>
    );
  })}
</div>

<div className="mt-6 grid grid-cols-2 gap-3 text-center">
              
              
            </div>
          </div>

          <motion.div
            variants={stagger}
            className="mx-auto mt-6 grid max-w-[310px] grid-cols-4 gap-2"
          >
            {[
  ["DAYS", dday],
  ["HOUR", timeUntilWedding.hours],
  ["MIN", timeUntilWedding.minutes],
  ["SEC", timeUntilWedding.seconds],
].map(([label, value]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-3xl bg-white py-4 shadow-sm"
              >
                <p className="text-[10px] text-stone-500">{label}</p>
                <p className="mt-1 text-xl font-semibold">{value}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-5 text-sm text-stone-600">
            {wedding.groom} ♥ {wedding.bride}의 결혼식이{" "}
            <strong>{dday}</strong>일 남았습니다.
          </p>

        </Section>

        




        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              GALLERY
            </p>

          </div>

         <div className="mt-8">
  <div
  className="relative overflow-hidden rounded-[1.8rem] bg-stone-100 shadow-sm"
  onTouchStart={(event) => {
    touchStartX.current = event.touches[0].clientX;
  }}
  onTouchMove={(event) => {
    touchEndX.current = event.touches[0].clientX;
  }}
  onTouchEnd={() => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {

  setGalleryIndex((prev) =>
    prev === wedding.gallery.length - 1 ? 0 : prev + 1
  );
} else {

  setGalleryIndex((prev) =>
    prev === 0 ? wedding.gallery.length - 1 : prev - 1
  );
}
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }}
>
{showGalleryHint && galleryIndex === 0 && (
  <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-xl bg-black/35 px-3 py-2 text-[11px] text-white backdrop-blur">
    <motion.span
      animate={{ x: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      className="text-base"
    >
      ‹
    </motion.span>

    <span className="leading-4">
      밀어서 더 많은
      <br />
      이미지 보기
    </span>

    <motion.span
      animate={{ x: [3, -3, 3] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      className="text-base"
    >
      ›
    </motion.span>
  </div>
)}

    <motion.div
  className="flex h-[520px]"
  animate={{ x: `-${galleryIndex * 100}%` }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  {wedding.gallery.map((src, index) => (
    <img
      key={src}
      src={src}
      alt={`갤러리 이미지 ${index + 1}`}
      draggable={false}
      className="h-[520px] w-full shrink-0 select-none object-cover touch-pan-y"
    />
  ))}
</motion.div>

    <button
      type="button"
      onClick={() => {
  setShowGalleryHint(false);
  setGalleryIndex((prev) =>
    prev === 0 ? wedding.gallery.length - 1 : prev - 1
  );
}}
      className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-white drop-shadow-md"
      aria-label="이전 사진"
    >
      <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
    </button>

    <button
      type="button"
      onClick={() => {
  setShowGalleryHint(false);
  setGalleryIndex((prev) =>
    prev === wedding.gallery.length - 1 ? 0 : prev + 1
  );
}}
      className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-white drop-shadow-md"
      aria-label="다음 사진"
    >
      <ChevronRight className="h-8 w-8 stroke-[1.5]" />
    </button>
  </div>

  <p className="mt-5 text-center text-sm text-stone-500">
    {galleryIndex + 1} / {wedding.gallery.length}
  </p>
</div>
        </Section>



        <Section className="bg-[#fbf8f3] text-center">

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            LOCATION
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
  <div ref={kakaoMapRef} className="h-[320px] w-full" />
</div>

<button
  type="button"
  onClick={() =>
  window.open(
    "https://map.kakao.com/?urlX=521142.99999999936&urlY=1121183.0000000005&urlLevel=3&itemId=23397688&q=%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4%20%EA%B0%95%EB%B3%80&srcid=23397688&map_type=TYPE_MAP",
    "_blank"
  )
}
  className="mt-3 w-full bg-white px-5 py-1 text-sm font-semibold text-stone-400"
>
  지도를 자세히 보려면 여기를 눌러주세요
</button>


          <div className="mt-7 rounded-[2rem] bg-white p-6 text-left shadow-sm">
            <div className="mb-4 flex items-start gap-3">
  <MapPin className="mt-1 h-5 w-5 shrink-0 text-stone-500" />

  <div className="min-w-0 flex-1">
    <p className="font-semibold">{wedding.venue}</p>
    <p className="text-sm text-stone-600">{wedding.hall}</p>
    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-stone-500">
  {wedding.address}
</p>
  </div>

  <div className="flex shrink-0 flex-col items-center gap-2">
  <button
    type="button"
    onClick={() => setSelectedMapImage("/images/map-3f.png")}
    className="h-20 w-24 overflow-hidden rounded-2xl bg-white shadow-sm"
    aria-label="3층 약도 보기"
  >
    <img
  src="/images/map-3f.png"
  alt="3층 약도"
  className="h-full w-full object-contain"
/>
  </button>

  <button
    type="button"
    onClick={() => setSelectedMapImage("/images/map-3f.png")}
    className="text-[11px] font-medium text-stone-400"
  >
    3층 약도 보기
  </button>
 </div>
</div>

            <button
              onClick={() => copyText("address", wedding.address)}
              className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700"
            >
              <Copy className="h-4 w-4" />
              주소 복사
            </button>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={wedding.naverMapUrl}
                className="rounded-2xl bg-stone-900 px-3 py-3 text-center text-xs font-semibold text-white"
              >
                네이버
              </a>
              <a
                href={wedding.kakaoMapUrl}
                className="rounded-2xl bg-[#f7dd4a] px-3 py-3 text-center text-xs font-semibold text-stone-900"
              >
                카카오
              </a>
              <a
                href={wedding.googleMapUrl}
                className="rounded-2xl bg-stone-100 px-3 py-3 text-center text-xs font-semibold text-stone-700"
              >
                구글
              </a>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-left">
            {[
              {

                title: "지하철",
                text: "2호선 강변역 강변테크노마트 판매동 B1 연결\n",
              },
              {

                title: "버스",
                text: "광진03, 광진05, 강동01, 1, 1-1, 9, 11, 15,  93, 112-1, 2000-1, 3212\n",
              },
              {

                title: "자가용",
                text: "강변테크노마트 지하주차장\n2시간 무료",
              },

            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1.6rem] bg-white p-5 shadow-sm"
              >

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 whitespace-pre-line text-sm leading-6 text-stone-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Section>


        <Section>
  <div className="text-center">
    <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
      GUESTBOOK
    </p>
  </div>

  <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
    <div className="space-y-3">
      <input
        value={guestName}
        onChange={(event) => setGuestName(event.target.value)}
        maxLength={20}
        placeholder="이름"
        className="w-full rounded-2xl bg-stone-50 px-4 py-3 text-sm outline-none ring-1 ring-stone-100 focus:ring-stone-300"
      />

      <textarea
        value={guestMessage}
        onChange={(event) => setGuestMessage(event.target.value)}
        maxLength={300}
        rows={4}
        placeholder="축하 메시지를 입력해주세요."
        className="w-full resize-none rounded-2xl bg-stone-50 px-4 py-3 text-sm leading-6 outline-none ring-1 ring-stone-100 focus:ring-stone-300"
      />

      <div className="flex items-center justify-between text-xs text-stone-400">
        <span>최대 300자</span>
        <span>{guestMessage.length}/300</span>
      </div>

      <button
        type="button"
        onClick={submitGuestbook}
        disabled={isSubmittingGuestbook}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-4 text-sm font-semibold text-white disabled:opacity-50"
      >
        <MessageCircle className="h-4 w-4" />
        {isSubmittingGuestbook ? "등록 중..." : "방명록 남기기"}
      </button>
    </div>
  </div>

  <div className="mt-7 space-y-3">
    {guestbookEntries.length === 0 ? (
      <div className="rounded-[1.7rem] bg-white p-5 text-center text-sm text-stone-400 shadow-sm">
        아직 등록된 방명록이 없습니다.
      </div>
    ) : (
      guestbookEntries.map((item) => (
        <div
          key={item.id}
          className="rounded-[1.7rem] bg-white p-5 shadow-sm"
        >
          <p className="text-xs tracking-[0.22em] text-stone-400">
            from.
          </p>
          <p className="mt-1 font-semibold">{item.name}</p>
          <p className="mt-3 whitespace-pre-line text-sm leading-6 text-stone-600">
            {item.message}
          </p>
          <p className="mt-3 text-xs text-stone-400">
            {new Date(item.created_at).toLocaleString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      ))
    )}
  </div>

{guestbookEntries.length > 0 && (
  <button
    type="button"
    onClick={() => setShowGuestbookModal(true)}
    className="mt-5 flex w-full items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-600 shadow-sm"
  >
    방명록 전체보기
  </button>
)}

</Section>

<Section className="text-center">
  <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
    ACCOUNT
  </p>

  <div className="mt-8 space-y-3 text-left">
    {[
      {
        id: "groom",
        title: "신랑측 계좌번호",
        accounts: [
          ["신랑 강준석", "국민", "750602-01-234482"],
          ["신랑 아버지 강형진", "농협", "821113-56-085108"],
          ["신랑 어머니 유숙희", "농협", "356-0695-5044-13"],
        ],
      },
      {
        id: "bride",
        title: "신부측 계좌번호",
        accounts: [
          ["신부 윤선영", "국민", "539701-04-021122"],
          ["신부 아버지 윤태열", "신한", "110-000-000000"],
          ["신부 어머니 최희영", "하나", "000-000000-00000"],
        ],
      },
    ].map((group) => (
      <div key={group.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <button
          type="button"
          onClick={() =>
            setOpenAccountSide(
              openAccountSide === group.id ? null : (group.id as "groom" | "bride")
            )
          }
          className="relative flex w-full items-center justify-center px-5 py-4 text-center"
        >
          <span className="font-semibold text-stone-700">{group.title}</span>
          <ChevronDown
  className={`absolute right-5 h-4 w-4 text-stone-500 transition-transform ${
    openAccountSide === group.id ? "rotate-180" : ""
  }`}
/>
        </button>

        {openAccountSide === group.id && (
          <div className="space-y-2 border-t border-stone-100 px-4 pb-4 pt-3">
            {group.accounts.map(([label, bank, account]) => (
              <button
                key={label}
                type="button"
                onClick={() => copyText(label, `${bank} ${account}`)}
                className="flex w-full items-center justify-between gap-3 rounded-xl bg-[#fbf8f3] px-3 py-3 text-left"
              >
                <div className="min-w-0">
                  <p>
                    <span className="text-xs text-stone-400">
                      {label.split(" ").slice(0, -1).join(" ")}
                    </span>{" "}
                    <span className="text-sm font-bold text-stone-900">
                      {label.split(" ").slice(-1)}
                    </span>
                  </p>

                  <p className="mt-1 whitespace-nowrap text-sm font-medium text-stone-700">
                    {bank} {account}
                  </p>
                </div>

                <Copy className="h-4 w-4 shrink-0 text-stone-400" />
              </button>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</Section>

<section className="relative min-h-screen overflow-hidden bg-stone-900">
    <div className="absolute inset-0"></div>
<div className="absolute inset-0">
  <ImageBox
    src={wedding.endingImage}
    alt="엔딩 사진"
    className="h-full w-full"
  />
</div>

  <div className="absolute inset-0 bg-black/50" />

<div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 pb-12 pt-24 text-center text-white">
  <div className="flex flex-col items-center">

    <p className="font-serif text-3xl leading-[1.75] drop-shadow-md">
      저희의 새로운 시작을
      <br />
      함께 해주셔서 감사합니다.
    </p>

    <div className="my-9 h-px w-14 bg-white/40" />

    <p className="font-serif text-2xl leading-[1.8] drop-shadow-md">
      신랑 {wedding.groom}
      <br />
      <span className="text-xl">♥</span>
      <br />
      신부 {wedding.bride}
    </p>
  </div>

   <div className="mt-10 flex flex-col items-center gap-5">
  <button
    type="button"
    onClick={shareInvitation}
    className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white"
  >
    <MessageCircle className="h-4 w-4" />
    카카오톡으로 공유하기
  </button>

  <button
    type="button"
    onClick={copyInvitationUrl}
    className="flex items-center justify-center gap-2 text-sm font-semibold text-white/90"
  >
    <Copy className="h-4 w-4" />
    청첩장 주소 복사하기
  </button>
</div>
  </div>
</section>

{selectedImageIndex !== null && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center overscroll-contain bg-black/90 px-4"
    onClick={() => setShowGalleryControls((prev) => !prev)}
  >
    <button
  type="button"
  aria-label="닫기"
  className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition hover:bg-white/30"
  onClick={(event) => {
    event.stopPropagation();
    setSelectedImageIndex(null);
  }}
>
  ×
</button>

    {showGalleryControls && (
      <button
        type="button"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur"
        onClick={(event) => {
          event.stopPropagation();
          setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return prev === 0 ? wedding.gallery.length - 1 : prev - 1;
          });
        }}
      >
        ‹
      </button>
    )}

    {showGalleryControls && (
      <button
        type="button"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur"
        onClick={(event) => {
          event.stopPropagation();
          setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return prev === wedding.gallery.length - 1 ? 0 : prev + 1;
          });
        }}
      >
        ›
      </button>
    )}

    <motion.div
      key={selectedImageIndex}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      style={{ touchAction: "pan-y" }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      onClick={(event) => {
        event.stopPropagation();
        setShowGalleryControls((prev) => !prev);
      }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -40) {
          setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return prev === wedding.gallery.length - 1 ? 0 : prev + 1;
          });
        }

        if (info.offset.x > 40) {
          setSelectedImageIndex((prev) => {
            if (prev === null) return prev;
            return prev === 0 ? wedding.gallery.length - 1 : prev - 1;
          });
        }
      }}
      className="flex max-h-[88vh] w-full max-w-[420px] flex-col items-center justify-center"
    >
      <img
        src={wedding.gallery[selectedImageIndex]}
        alt={`확대 이미지 ${selectedImageIndex + 1}`}
        draggable={false}
        className="max-h-[78vh] max-w-full select-none rounded-2xl object-contain shadow-2xl"
      />

<div className="mt-5 flex h-10 items-center justify-center">
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
   {[0, 1, 2].map((dotIndex) => {
  const isFirstImage = selectedImageIndex === 0;
  const isLastImage = selectedImageIndex === wedding.gallery.length - 1;
  const isMiddleImage = !isFirstImage && !isLastImage;

  const isActive =
    (dotIndex === 0 && isFirstImage) ||
    (dotIndex === 1 && isMiddleImage) ||
    (dotIndex === 2 && isLastImage);

  return (
    <span
      key={dotIndex}
      className={`h-2 rounded-full transition-all duration-300 ${
        isActive && dotIndex === 1
          ? "w-8 bg-white"
          : isActive
            ? "w-2 scale-125 bg-white"
            : "w-2 bg-white/40"
      }`}
    />
  );
})}
  </div>
</div>
    </motion.div>
  </div>
)}

{selectedMapImage && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4">
    <button
      type="button"
      onClick={() => setSelectedMapImage(null)}
      className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur"
      aria-label="닫기"
    >
      ×
    </button>

    <div className="h-[85vh] w-full max-w-[430px] overflow-hidden">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={4}
        centerOnInit
        doubleClick={{ disabled: true }}
        wheel={{ disabled: true }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent
          wrapperClass="!h-full !w-full"
          contentClass="!h-full !w-full"
        >
          <img
            src={selectedMapImage}
            alt="약도 확대 보기"
            className="h-full w-full object-contain"
            draggable={false}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  </div>
)}

{showGuestbookModal && (
  <div
    className="fixed inset-0 z-[1000] overscroll-contain bg-black/70 px-5 py-8"
    onClick={() => setShowGuestbookModal(false)}
  >
    <div
      className="mx-auto flex h-full max-w-[390px] flex-col rounded-[2rem] bg-[#fbf8f3] p-5 shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setShowGuestbookModal(false)}
        className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-stone-500 shadow-sm"
        aria-label="닫기"
      >
        ×
      </button>

      <div className="text-center">
        <p className="mb-3 text-xs tracking-[0.28em] text-stone-400">
          GUESTBOOK
        </p>
        <h2 className="font-serif text-2xl">방명록 전체보기</h2>
      </div>

      <div className="mt-6 flex-1 space-y-3 overflow-y-auto pr-1">
        {allGuestbookEntries.map((item) => (
          <div
            key={item.id}
            className="rounded-[1.7rem] bg-white p-5 shadow-sm"
          >
            <p className="text-xs tracking-[0.22em] text-stone-400">
              from.
            </p>
            <p className="mt-1 font-semibold">{item.name}</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-6 text-stone-600">
              {item.message}
            </p>
            <p className="mt-3 text-xs text-stone-400">
              {new Date(item.created_at).toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}



        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 z-50 w-[280px] -translate-x-1/2 rounded-full bg-stone-900 px-5 py-3 text-center text-sm text-white shadow-xl"
          >
            복사되었습니다
          </motion.div>
        )}

        <footer className="bg-[#fbf8f3] px-6 py-6 text-center text-xs text-stone-400">
        ©{new Date(wedding.weddingDateISO).getFullYear()} {wedding.groom}♡{wedding.bride} Wedding Invitation
         </footer>
            </main>
    </div>
  );
}