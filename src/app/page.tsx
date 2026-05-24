"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
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
  Send,
  Car,
  Train,
  Bus,
  Clock,
  ChevronDown as DownIcon,
} from "lucide-react";

const wedding = {
  groom: "강준석",
  bride: "윤선영",
  date: "2027. 01. 30",
  weddingDateISO: "2027-01-30T15:10:00",
  firstMetDateISO: "2026-03-07T00:00:00",
  time: "토요일 오후 3시 10분",
  secondTime: "오후 4시",
  venue: "베니르홀",
  hall: "웨딩스퀘어 강변",
  address: "서울 광진구 광나루로56길 85 테크노마트 3,4층",
  intro:
    "저희 두 사람의 작은 만남이\n진실한 사랑으로 꽃피어\n오늘 이 자리를 빛내는 결혼식으로 이어졌습니다.\n\n평생 서로를 귀히 여기며\n처음의 설렘과 순수함을 잃지 않고\n존중하고 아껴 나가겠습니다.\n\n여러분의 따뜻한 축복이 함께 한다면\n더할 나위 없는 기쁨으로 간직하겠습니다.",
  groomFather: "강형진",
  groomMother: "유숙희",
  brideFather: "윤태열",
  brideMother: "최희영",
  groomPhone: "010-5609-9428",
  bridePhone: "010-5573-1226",
  groomAccount: "신한 110-000-000000 강준석",
  groomFatherAccount: "국민 000000-00-000000 강○○",
  groomMotherAccount: "우리 0000-000-000000 김○○",
  brideAccount: "국민 000000-00-000000 윤선영",
  brideFatherAccount: "신한 110-000-000000 윤○○",
  brideMotherAccount: "하나 000-000000-00000 박○○",
  naverMapUrl: "https://naver.me/FdCx2LFq",
  kakaoMapUrl: "https://place.map.kakao.com/23397688",
  googleMapUrl: "https://share.google/Ajz4IFUghVclkvLRt",
  heroImage: "/images/main.jpg",
  middleImage: "/images/gallery2.jpg",
  endingImage: "/images/gallery5.jpg",
  gallery: [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
  ],
};

const aboutUs = [
  {
    role: "신랑",
    name: wedding.groom,
    family: `${wedding.groomFather} · ${wedding.groomMother}의 아들`,
    birth: "1994년 04월 28일",
    mbti: "ISTJ",
    tags: "#러닝 #캠핑 #차분함",
    image: "/images/groom.jpg",
  },
  {
    role: "신부",
    name: wedding.bride,
    family: `${wedding.brideFather} · ${wedding.brideMother}의 딸`,
    birth: "1991년 02월 21일",
    mbti: "ISFP",
    tags: "#여행 #사진 #밝은웃음",
    image: "/images/bride.jpg",
  },
];

const timeline = [
  {
    date: "처음 만난 날",
    title: "서로의 일상에 들어온 순간",
    text: "우연처럼 시작된 만남이 어느새 가장 편안한 하루가 되었습니다.",
    image: "/images/gallery1.jpg",
  },
  {
    date: "함께한 시간",
    title: "조금씩 닮아간 우리",
    text: "좋아하는 것과 웃는 순간들이 하나둘 비슷해졌습니다.",
    image: "/images/gallery2.jpg",
  },
  {
    date: "프로포즈",
    title: "평범한 하루가 특별해진 날",
    text: "익숙한 공간에서 우리의 약속이 시작되었습니다.",
    image: "/images/gallery3.jpg",
  },
  {
    date: wedding.date,
    title: "새로운 이야기가 시작되는 날",
    text: "소중한 분들 앞에서 서로의 손을 꼭 잡고 함께 걸어가겠습니다.",
    image: "/images/gallery4.jpg",
  },
];

const interviews = [
  {
    q: "첫인상은 어땠나요?",
    groom:
      "밝고 따뜻한 느낌이 가장 먼저 기억나요. 처음 만났는데도 오래 알고 지낸 사람처럼 편했습니다.",
    bride:
      "말은 많지 않았지만 진중한 느낌이었어요. 웃을 때 편안한 분위기가 인상적이었습니다.",
  },
  {
    q: "결혼을 결심한 계기가 있다면?",
    groom:
      "매일의 사소한 순간이 즐겁고 편안했어요. 함께라면 어떤 날도 잘 지나갈 수 있겠다는 확신이 들었습니다.",
    bride:
      "어떤 상황에서도 제 마음을 먼저 생각해주는 모습이 고마웠어요. 그 따뜻함이 확신이 되었습니다.",
  },
  {
    q: "앞으로 어떤 부부가 되고 싶나요?",
    groom:
      "서로를 가장 먼저 응원하는 편안한 팀이 되고 싶습니다.",
    bride:
      "좋은 날에도 힘든 날에도 같은 편이 되어주는 부부가 되고 싶습니다.",
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
  const diff = Math.ceil(
    (weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return diff > 0 ? diff : 0;
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

  while (days.length % 7 !== 0) {
    days.push({
      day: days.length,
      currentMonth: false,
      isWeddingDay: false,
    });
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

function AccountGroup({
  title,
  accounts,
  copyText,
}: {
  title: string;
  accounts: string[];
  copyText: (label: string, text: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-5 py-5 text-left font-medium"
      >
        <span>{title}</span>
        <DownIcon
          className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="space-y-2 border-t border-stone-100 px-5 pb-5 pt-3">
          {accounts.map((account) => (
            <button
              key={account}
              type="button"
              onClick={() => copyText(account, account)}
              className="flex w-full items-center justify-between rounded-2xl bg-stone-50 px-4 py-3 text-left text-sm"
            >
              <span className="leading-6">{account}</span>
              <Copy className="h-4 w-4 text-stone-500" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileWeddingInvitation() {
  const [copied, setCopied] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [timeSinceFirstMet, setTimeSinceFirstMet] = useState(
    getTimeSinceFirstMet()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSinceFirstMet(getTimeSinceFirstMet());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


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

  const shareInvitation = async () => {
    const shareData = {
      title: `${wedding.groom}♡${wedding.bride} 모바일 청첩장`,
      text: "소중한 날, 함께 축복해주시면 감사하겠습니다.",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    setCopied("share");
    setTimeout(() => setCopied(""), 1600);
  };

  return (
    <div className="min-h-screen bg-[#e8dfd2] text-stone-800">
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.9 }}
                className="font-serif text-5xl leading-tight tracking-wide drop-shadow-sm"
              >
                {wedding.groom}
                <br />
                <span className="text-6xl">♡</span>
                <br />
                {wedding.bride}
              </motion.h1>
            </div>

            <div className="pb-7">
              <div className="mx-auto mb-7 w-fit rounded-full border border-white/40 bg-white/15 px-5 py-2 text-xs backdrop-blur-md">
                D-{dday}
              </div>

              <p className="mb-2 text-lg tracking-widest">{wedding.date}</p>
              <p className="text-sm opacity-95">{wedding.time}</p>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="mt-11 flex justify-center"
              >
                <ChevronDown className="h-7 w-7" />
              </motion.div>
            </div>
          </motion.div>

          <TornEdge />
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

          <div className="mt-9 rounded-[2rem] bg-white p-5 text-sm leading-7 shadow-sm">
            <p>
              {wedding.groomFather} · {wedding.groomMother}의 아들{" "}
              <strong>{wedding.groom}</strong>
            </p>
            <p className="my-1 text-stone-300">|</p>
            <p>
              {wedding.brideFather} · {wedding.brideMother}의 딸{" "}
              <strong>{wedding.bride}</strong>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={`tel:${wedding.groomPhone}`}
              className="rounded-full bg-stone-900 px-4 py-3 text-sm font-medium text-white"
            >
              신랑 연락하기
            </a>
            <a
              href={`tel:${wedding.bridePhone}`}
              className="rounded-full bg-stone-900 px-4 py-3 text-sm font-medium text-white"
            >
              신부 연락하기
            </a>
          </div>
        </Section>

        <Section className="bg-[#efe6da] text-center">
          <TornEdge top />

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            WEDDING DAY
          </p>
          <h2 className="font-serif text-2xl">{calendar.year}년 {String(calendar.month).padStart(2, "0")}월</h2>
          <p className="mt-2 text-sm text-stone-600">
            하루, 한 번의 소중한 시간으로 여러분을 초대합니다.
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
            <div className="mb-5 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-3xl bg-[#fbf8f3] p-4">
                <p className="text-xs text-stone-500">예식</p>
                <p className="mt-1 font-semibold">{wedding.time}</p>
                <p className="mt-2 text-xs leading-5 text-stone-500">
                  가족과 가까운 분들과 함께하는 따뜻한 예식
                </p>
              </div>
              <div className="rounded-3xl bg-[#fbf8f3] p-4">
                <p className="text-xs text-stone-500">피로연</p>
                <p className="mt-1 font-semibold">{wedding.secondTime}</p>
                <p className="mt-2 text-xs leading-5 text-stone-500">
                  함께 웃고 인사를 나누는 편안한 시간
                </p>
              </div>
            </div>

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
          </div>

          <motion.div
            variants={stagger}
            className="mx-auto mt-6 grid max-w-[310px] grid-cols-4 gap-2"
          >
            {[
              ["DAYS", dday],
              ["HOUR", 0],
              ["MIN", 0],
              ["SEC", 0],
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
            {wedding.groom} {wedding.bride}의 결혼식이{" "}
            <strong>{dday}</strong>일 남았습니다.
          </p>

          <TornEdge />
        </Section>

        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              ABOUT US
            </p>
            <h2 className="font-serif text-2xl">저희를 소개합니다</h2>
          </div>

          <div className="mt-8 space-y-5">
            {aboutUs.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
              >
                <ImageBox
                  src={person.image}
                  alt={`${person.role} ${person.name}`}
                  className="h-[260px] w-full"
                />
                <div className="p-5 text-center">
                  <p className="text-xs tracking-[0.24em] text-stone-400">
                    {person.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500">
                    {person.family}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-2xl bg-stone-50 p-3">
                      {person.birth}
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-3">
                      {person.mbti}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-stone-500">
                    {person.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-[#efe6da]">
          <TornEdge top />

          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              OUR TIMELINE
            </p>
            <h2 className="font-serif text-2xl">우리의 이야기</h2>
            <p className="mt-3 text-sm text-stone-500">
              처음 만난 순간부터 지금까지
            </p>
          </div>

          <div className="mt-9 space-y-5">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] bg-white p-4 shadow-sm"
              >
                <ImageBox
                  src={item.image}
                  alt={item.title}
                  //our timeline 우리의 이야기 사진사이즈
                  className="h-[300px] w-full rounded-[1.5rem]"
                />
                <div className="mt-4">
                  <p className="text-xs tracking-[0.22em] text-stone-400">
                    {item.date}
                  </p>
                  <h3 className="mt-2 font-serif text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-500">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <TornEdge />
        </Section>

        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              INTERVIEW
            </p>
            <h2 className="font-serif text-2xl">우리에게 물었습니다</h2>
          </div>

          <div className="mt-8 space-y-5">
            {interviews.map((item, index) => (
              <div
                key={item.q}
                className="rounded-[2rem] bg-white p-5 shadow-sm"
              >
                <p className="text-xs tracking-[0.22em] text-stone-400">
                  Q{index + 1}.
                </p>
                <h3 className="mt-2 font-serif text-xl">{item.q}</h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-stone-600">
                  <div className="rounded-3xl bg-stone-50 p-4">
                    <p className="mb-2 font-semibold text-stone-800">
                      신랑 {wedding.groom}
                    </p>
                    <p>{item.groom}</p>
                  </div>
                  <div className="rounded-3xl bg-[#f7f0e8] p-4">
                    <p className="mb-2 font-semibold text-stone-800">
                      신부 {wedding.bride}
                    </p>
                    <p>{item.bride}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-[#efe6da] text-center">
          <TornEdge top />

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            LOCATION
          </p>
          <h2 className="font-serif text-2xl">오시는 길</h2>

          <div className="mt-7 rounded-[2rem] bg-white p-6 text-left shadow-sm">
            <div className="mb-4 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-stone-500" />

              <div>
                <p className="font-semibold">{wedding.venue}</p>
                <p className="text-sm text-stone-600">{wedding.hall}</p>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  {wedding.address}
                </p>
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
                icon: <Bus className="h-5 w-5" />,
                title: "셔틀버스",
                text: "10~20분 간격 왕복 운행 · 예식장 정문 앞 하차",
              },
              {
                icon: <Train className="h-5 w-5" />,
                title: "지하철",
                text: "가까운 역 1번 출구에서 도보 5분",
              },
              {
                icon: <Car className="h-5 w-5" />,
                title: "자가용",
                text: "예식장 지하 주차장 이용 가능 · 2시간 무료",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1.6rem] bg-white p-5 shadow-sm"
              >
                <div className="text-stone-500">{item.icon}</div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <TornEdge />
        </Section>

        <Section className="text-center">
          <ImageBox
            src={wedding.middleImage}
            alt="중간 사진"
            className="mb-8 h-[300px] w-full rounded-[2rem]"
          />

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            D+DAY
          </p>
          <h2 className="font-serif text-2xl">우리가 함께한 시간</h2>
          <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">처음 만난 날</p>
            <p className="mt-2 font-serif text-2xl">2026-03-07</p>
            <div className="my-5 h-px bg-stone-100" />
            <p className="text-sm text-stone-500">오늘까지 함께 걸어온 시간</p>
            <p className="mt-2 text-2xl font-semibold">
               {timeSinceFirstMet.days} 일 {timeSinceFirstMet.hours} 시간{" "}
               {timeSinceFirstMet.minutes} 분 {timeSinceFirstMet.seconds} 초
              </p>
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              GALLERY
            </p>
            <h2 className="font-serif text-2xl">갤러리</h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {wedding.gallery.map((src, index) => (
              <GalleryImage
                key={src}
                src={src}
                index={index}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </Section>

        <Section className="bg-[#efe6da]">
          <TornEdge top />

          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              INFORMATION
            </p>
            <h2 className="font-serif text-2xl">안내사항</h2>
          </div>

          <div className="mt-8 space-y-3">
            {[
              {
                title: "예식 안내",
                text: "예식 30분 전 여유 있게 도착해주시면 감사하겠습니다.",
              },
              {
                title: "식사 안내",
                text: "예식 후 피로연장에서 식사가 준비되어 있습니다.",
              },
              {
                title: "주차 안내",
                text: "예식장 지하 주차장을 이용하실 수 있습니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] bg-white p-5 shadow-sm"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <TornEdge />
        </Section>

        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              GUESTBOOK
            </p>
            <h2 className="font-serif text-2xl">방명록</h2>
            <p className="mt-3 text-sm text-stone-500">
              정식 저장 기능은 추후 추가할 수 있어요.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {guestbook.map((item) => (
              <div
                key={item.date}
                className="rounded-[1.7rem] bg-white p-5 shadow-sm"
              >
                <p className="text-xs tracking-[0.22em] text-stone-400">
                  from.
                </p>
                <p className="mt-1 font-semibold">{item.name}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {item.text}
                </p>
                <p className="mt-3 text-xs text-stone-400">{item.date}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-white/60">
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              ACCOUNT
            </p>
            <h2 className="font-serif text-2xl">마음 전하는 곳</h2>
            <p className="mx-auto mt-4 max-w-[280px] text-sm leading-7 text-stone-500">
              참석이 어려우신 분들을 위해 계좌번호를 안내해 드립니다.
              너그러운 마음으로 양해 부탁드립니다.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <AccountGroup
              title="신랑측 계좌번호"
              accounts={[
                wedding.groomAccount,
                wedding.groomFatherAccount,
                wedding.groomMotherAccount,
              ]}
              copyText={copyText}
            />
            <AccountGroup
              title="신부측 계좌번호"
              accounts={[
                wedding.brideAccount,
                wedding.brideFatherAccount,
                wedding.brideMotherAccount,
              ]}
              copyText={copyText}
            />
          </div>
        </Section>

        <Section>
          <div className="text-center">
            <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
              RSVP
            </p>
            <h2 className="font-serif text-2xl">참석 의사 전달</h2>
            <p className="mx-auto mt-4 max-w-[270px] text-sm leading-7 text-stone-500">
              신랑, 신부에게 참석 의사를 미리 전달해 주세요.
            </p>
          </div>

          <button
            type="button"
            onClick={() => alert("RSVP 저장 기능은 다음 단계에서 추가할 수 있어요.")}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-4 text-sm font-semibold text-white"
          >
            <Send className="h-4 w-4" />
            전달하기
          </button>

          <button
            type="button"
            onClick={() => alert("화환 기능은 외부 서비스 연결 시 추가할 수 있어요.")}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#efe6da] px-5 py-4 text-sm font-semibold text-stone-700"
          >
            <Heart className="h-4 w-4" />
            축하 화환 보내기
          </button>
        </Section>

        <Section className="bg-[#efe6da] text-center">
          <TornEdge top />

          <p className="mb-3 text-xs tracking-[0.28em] text-stone-500">
            GUEST ALBUM
          </p>
          <h2 className="font-serif text-2xl">
            예쁘게 빛난 순간,
            <br />
            같이 공유해요!
          </h2>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {wedding.gallery.slice(0, 3).map((src, index) => (
              <ImageBox
                key={src}
                src={src}
                alt={`게스트 앨범 ${index + 1}`}
                className="aspect-square rounded-3xl"
              />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-[280px] text-sm leading-7 text-stone-600">
            오늘의 추억은 여러분의 한 장에서 완성돼요. 예식 당일,
            아래 버튼으로 가볍게 공유해주세요!
          </p>

          <button
            type="button"
            onClick={() => alert("사진 업로드 기능은 추후 저장소 연결 후 추가할 수 있어요.")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-4 text-sm font-semibold text-white"
          >
            <Camera className="h-4 w-4" />
            사진 업로드
          </button>

          <TornEdge />
        </Section>

        <section className="relative min-h-[560px] overflow-hidden bg-stone-900">
          <ImageBox
            src={wedding.endingImage}
            alt="엔딩 사진"
            className="absolute inset-0 h-full w-full opacity-80"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 text-center text-white">
            <Heart className="mb-6 h-8 w-8 fill-white text-white" />
            <p className="font-serif text-3xl leading-relaxed">
              저희의 새로운 시작을
              <br />
              함께 해주셔서 감사합니다.
            </p>
            <p className="mt-8 font-serif text-2xl">
              신랑 {wedding.groom}
              <br />
             ♥
              <br />             
              신부 {wedding.bride}
            </p>

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

        {selectedImage && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur"
              onClick={() => setSelectedImage(null)}
            >
              닫기
            </button>

            <img
              src={selectedImage}
              alt="확대 이미지"
              className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
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
          ©2026 {wedding.groom}♡{wedding.bride} Wedding Invitation
        </footer>
      </main>
    </div>
  );
}