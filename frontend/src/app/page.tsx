"use client";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import JobCard from "@/components/Card/JobCard";
import TabItem from "@/components/Button/TabItem";
import HomeHeader from "@/components/Common/Header/HomeHeader";
import JobCardSlide from "@/components/Slide/JobCardSlide";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <JobCardSlide />
      <div className="flex flex-col py-20">
        <JobCard
          image="/JobCardPhoto/jobcard1.webp"
          hashtags={[
            "NEW",
            "インターン",
            "学生インターン",
            "週末からのコミットでもOK",
            "オンライン面談OK",
          ]}
          title="コーポレート部門の長期インターンを募集します！"
          description="コーポレート部門の長期インターンを募集します！ 営業や総務、経理部門を希望する方、幅広い視点で会社に関わってみたい方に最適です。 【具体的な業務内容】 ・営業業務のサポート（顧客対応 等） ・総務のサポート（入退社管理、勤怠管理 等） ・経理のサポート（日常仕分 等） ・その他上記に付随する業務 【求める人物像】 ・好奇心が旺盛で、様々な業務を経験してみたい方 ・臨機応変な対応が"
          entryNumber={23}
          companyLogo="/JobCardPhoto/jobcard1logo.webp"
          companyName="株式会社ソフトバンク"
          shareNumber={4}
        />
        <JobCard
          image="/JobCardPhoto/jobcard1.webp"
          hashtags={[
            "NEW",
            "インターン",
            "学生インターン",
            "週末からのコミットでもOK",
            "オンライン面談OK",
          ]}
          title="コーポレート部門の長期インターンを募集します！"
          description="コーポレート部門の長期インターンを募集します！ 営業や総務、経理部門を希望する方、幅広い視点で会社に関わってみたい方に最適です。 【具体的な業務内容】 ・営業業務のサポート（顧客対応 等） ・総務のサポート（入退社管理、勤怠管理 等） ・経理のサポート（日常仕分 等） ・その他上記に付随する業務 【求める人物像】 ・好奇心が旺盛で、様々な業務を経験してみたい方 ・臨機応変な対応が"
          entryNumber={23}
          companyLogo="/JobCardPhoto/jobcard1logo.webp"
          companyName="株式会社ソフトバンク"
          shareNumber={4}
        />
      </div>
    </>
  );
}
