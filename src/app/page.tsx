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

  Car,
  Train,
  Bus,
  Clock,

} from "lucide-react";

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: "feed";
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons: {
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }[];
        }) => void;
      };
    };
  }
}

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
  kakaoMapUrl: "https://place.map.kakao.com/23397688",
  googleMapUrl: "https://share.google/Ajz4IFUghVclkvLRt",
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


const guestbook = [
  {
    name: "친구",
    text: "두 사람의 새로운 시작을 진심으로 축하해요. 늘 지금처럼 예쁘게 사랑하세요.",
    date: "2026-05-24 12:30",
  },
  {
    name: "동료",
    text: "서로의 가장 든든한 편이 되어 행복한 날들을 만들어가길 바랍니다.",
    date: "2026-05-24 12:31",
  },
  {
    name: "가족",
    text: "오늘의 마음처럼 따뜻하고 단단한 가정을 이루길 축복합니다.",
    date: "2026-05-24 12:32",
  },
];

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
  const [showGuestbookModal, setShowGuestbookModal] = useState(false);
  const [selectedMapImage, setSelectedMapImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
  null
);
const [showGalleryControls, setShowGalleryControls] = useState(true);

  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const [allGuestbookEntries, setAllGuestbookEntries] = useState<GuestbookEntry[]>([]);
const [guestName, setGuestName] = useState("");
const [guestMessage, setGuestMessage] = useState("");

const audioRef = useRef<HTMLAudioElement | null>(null);
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

const shareInvitation = () => {
  const invitationUrl = "https://wedding-invitation-gamma-olive.vercel.app";
  const imageUrl = invitationUrl + "/images/og-image.png";

  // Kakao SDK가 로드되지 않았을 경우 링크 복사 안내
  if (!window.Kakao) {
    navigator.clipboard.writeText(invitationUrl);
    alert("카카오 공유 준비 중입니다. 링크를 복사했어요.");
    return;
  }

  // Kakao SDK 초기화
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
            

            <div className="mb-3 grid grid-cols-7 text-center text-xs text-stone-400">
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {calendar.days.map((item, index) => (
                <div
                  key={`${item.day}-${index}`}
                  className={`flex aspect-square items-center justify-center rounded-full ${
                    item.isWeddingDay
                      ? "bg-stone-900 font-semibold text-white"
                      : item.currentMonth
                        ? "text-stone-700"
                        : "text-stone-300"
                  }`}
                >
                  {item.day}
                </div>
              ))}
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

          <div className="mt-8 grid grid-cols-2 gap-3">
  {wedding.mainGallery.map((src, index) => {
    const realIndex = wedding.gallery.findIndex((image) => image === src);

    return (
      <button
        key={src}
        type="button"
        onClick={() => {
          setSelectedImageIndex(realIndex >= 0 ? realIndex : index);
          setShowGalleryControls(true);
        }}
        
        className="aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100 shadow-sm"
      >
        <img
          src={src}
          alt={`갤러리 대표 이미지 ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </button>
    );
  })}
</div>
        </Section>



        <Section className="bg-[#fbf8f3] text-center">

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            LOCATION
          </p>
          <h2 className="font-serif text-2xl">오시는 길</h2>

          <button
  type="button"
  onClick={() => setSelectedMapImage("/images/map-weddinghall.png")}
  className="mt-6 overflow-hidden rounded-[1.5rem] bg-white shadow-sm"
>
  <ImageBox
    src="/images/map-weddinghall.png"
    alt="웨딩스퀘어 강변점 약도"
    contain
    className="h-auto w-full"
  />
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
                <div className="text-stone-500">{item.icon}</div>
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
    <h2 className="font-serif text-2xl">방명록</h2>
    <p className="mt-3 text-sm text-stone-500">
      두 사람에게 따뜻한 축하 인사를 남겨주세요.
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



  <button
    type="button"
    onClick={() => setShowAccountModal(true)}
    className="mx-auto mt-7 flex items-center justify-center gap-2 rounded-full bg-stone-800 px-6 py-4 text-sm font-semibold text-white shadow-sm"
  >
    <Copy className="h-4 w-4" />
    신랑측 계좌번호
  </button>

    <button
    type="button"
    onClick={() => setShowAccountModal(true)}
    className="mx-auto mt-7 flex items-center justify-center gap-2 rounded-full bg-stone-800 px-6 py-4 text-sm font-semibold text-white shadow-sm"
  >
    <Copy className="h-4 w-4" />
    신부측 계좌번호
  </button>

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

    <button
  type="button"
  onClick={shareInvitation}
  className="mt-10 flex items-center justify-center gap-2 rounded-full bg-[#f7dd4a] px-6 py-4 text-sm font-semibold text-stone-900"
>
  <MessageCircle className="h-4 w-4" />
  카카오톡으로 공유하기
</button>
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

    <div className="h-[85vh] w-full max-w-[430px] overflow-hidden rounded-2xl bg-white">
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

{showAccountModal && (
  <div
    className="fixed inset-0 z-[1000] flex items-center justify-center overscroll-contain bg-black/70 px-5"
    onClick={() => setShowAccountModal(false)}
  >
    <div
      className="w-full max-w-[390px] rounded-[2rem] bg-white p-6 text-center shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setShowAccountModal(false)}
        className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-xl text-stone-500"
        aria-label="닫기"
      >
        ×
      </button>

      <p className="mb-3 text-xs tracking-[0.28em] text-stone-400">
        ACCOUNT
      </p>
      <h2 className="font-serif text-2xl">마음 전하실 곳</h2>
      <p className="mt-3 text-sm leading-6 text-stone-500">
        계좌번호를 누르면 복사됩니다.
      </p>

      <div className="mt-6 space-y-4 text-left text-sm">
        {[
  ["신랑 강준석", "국민", "750602-01-234482"],
  ["신랑 아버지 강형진", "농협", "821113-56-085108"],
  ["신랑 어머니 유숙희", "농협", "356-0695-5044-13"],
  ["신부 윤선영", "국민", "539701-04-021122"],
  ["신부 아버지 윤태열", "신한", "110-000-000000"],
  ["신부 어머니 최희영", "하나", "000-000000-00000"],
].map(([label, bank, account]) => (
  <button
    key={label}
    type="button"
    onClick={() => copyText(label, `${bank} ${account}`)}
    className="flex w-full items-center justify-between gap-3 rounded-2xl bg-[#fbf8f3] px-4 py-3 text-left"
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