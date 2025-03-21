import Image from "next/image";
import * as images from '../../../public/avatar';
import DateConvert from "@/Utils/Date";
import { AdminTeacher } from "@prisma/client";
export default function FullAdmin_TeacherDetails({ Admin_Teacher }: { Admin_Teacher: AdminTeacher }) {


  return (
    <>
      <div key={Admin_Teacher?.id} className={`${Admin_Teacher?.gender === 'MALE' ? 'bg-slate-400 shadow' : 'bg-blue-300 shadow'} w-full min-h-36 text-center p-1 rounded flex flex-col mb-6  `}>
        <div className="w-full text-center  flex justify-between flex-wrap flex-row-reverse md:flex-col items-start sm:items-center py-5 ">
          <Image loading="lazy" className="w-1/3 shadow shadow-orange-400" height={480} width={180} src={Admin_Teacher?.image || (Admin_Teacher?.gender === 'FEMALE' ? images.female_teatcher : images.male_admin)} alt="Admin_Teacher" />

          <div className="w-full flex flex-col px-3 justify-start items-start lg:w-2/3  ">
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl">الاسم :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.name}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color lg:text-xl">النوع : </span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.gender === 'FEMALE' ? 'أنثى' : 'ذكر'}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl">رقم الهاتف :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.telephone}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl">البريد الإلكتروني :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.email}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl"> الوظيفة :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.gender === 'MALE' ? 'مشرف عام' : 'مشرفة عام'}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl"> العنوان :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.address}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl"> العمر :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.age}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl"> المؤهل :</span>
              <span className="lg:text-2xl font-bold">{Admin_Teacher?.education}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="lg:px-2 px-0 font-bold text-text_color  lg:text-xl"> يوم التسجيل :</span>
              <span className="lg:text-2xl font-bold">{DateConvert(Admin_Teacher?.createdAt)}</span>
            </div>

          </div>
        </div>

        <div className="details w-full bg-fuchisa-700 min-h-20">

        </div>
      </div>
    </>
  )
}
