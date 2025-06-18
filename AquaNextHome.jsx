
// Aqua Next Kft. kétnyelvű modern weboldal – bővített verzió térképpel és e-mail küldéssel
// React + Tailwind CSS alapú struktúra

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AquaNextHome() {
  const [lang, setLang] = useState("hu");

  const content = {
    hu: {
      title: "Aqua Next Kft.",
      subtitle: "Tiszta víz, mely megoldások.",
      nav: ["Rólunk", "Szolgáltatások", "Gépek", "Galéria", "Kapcsolat"],
      intro: "15 év tapasztalat, több száz fúrt kút, gyors és precíz kivitelezés.",
      about:
        "Cégünk kútfúrással és vízgépészeti megoldásokkal foglalkozik. Korszerű gépeinkkel és fiatalos csapatunkkal gyors, hatékony és megbízható munkát végzünk.",
      services: [
        "Talajmechanikai vizsgálatok",
        "Kúttervezés és engedélyeztetés",
        "Ivóvíz- és locsolókutak fúrása",
        "Geotermikus kutak",
        "Kútfelújítás és karbantartás"
      ],
      machines: [
        "Fúróberendezés – nagy mélységű fúrásra alkalmas",
        "Forgó kotró – terepelőkészítéshez",
        "Darus, billenőplatós teherautó – gépszállításhoz és anyagmozgatáshoz"
      ],
      gallery: "Galéria hamarosan...",
      documents: "Letölthető dokumentumainkat itt találja:",
      contact: "Lépjen kapcsolatba velünk az alábbi űrlapon keresztül!",
      form: {
        name: "Név",
        email: "E-mail",
        message: "Üzenet",
        send: "Küldés"
      },
      satisfaction: "Ügyfeleink elégedettsége: 98%",
      map: "Telephelyünk: Rácalmás, Fő út 61."
    },
    en: {
      title: "Aqua Next Ltd.",
      subtitle: "Clean water, clever solutions.",
      nav: ["About", "Services", "Equipment", "Gallery", "Contact"],
      intro: "15 years of experience, hundreds of drilled wells, fast and precise execution.",
      about:
        "Our company specializes in well drilling and water engineering solutions. With our modern equipment and youthful team, we provide fast, efficient and reliable services.",
      services: [
        "Soil mechanics analysis",
        "Well design and permitting",
        "Drilling of potable and irrigation wells",
        "Geothermal wells",
        "Well renovation and maintenance"
      ],
      machines: [
        "Drilling rig – suitable for deep wells",
        "Rotary excavator – for site preparation",
        "Crane truck with tilting platform – for transporting equipment and materials"
      ],
      gallery: "Gallery coming soon...",
      documents: "You can find our downloadable documents here:",
      contact: "Get in touch with us using the form below!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send"
      },
      satisfaction: "Customer satisfaction: 98%",
      map: "Our site: Rácalmás, Fő út 61."
    }
  };

  const t = content[lang];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <div>
          <Button onClick={() => setLang("hu")} variant={lang === "hu" ? "default" : "outline"}>HU</Button>
          <Button onClick={() => setLang("en")} variant={lang === "en" ? "default" : "outline"}>EN</Button>
        </div>
      </div>

      <h2 className="text-xl text-gray-700">{t.subtitle}</h2>
      <p>{t.intro}</p>

      <Card><CardContent className="p-4"><h3 className="text-lg font-semibold mb-2">{t.nav[0]}</h3><p>{t.about}</p></CardContent></Card>
      <Card><CardContent className="p-4"><h3 className="text-lg font-semibold mb-2">{t.nav[1]}</h3><ul className="list-disc pl-5">{t.services.map((s, i) => (<li key={i}>{s}</li>))}</ul></CardContent></Card>
      <Card><CardContent className="p-4"><h3 className="text-lg font-semibold mb-2">{t.nav[2]}</h3><ul className="list-disc pl-5">{t.machines.map((m, i) => (<li key={i}>{m}</li>))}</ul></CardContent></Card>
      <Card><CardContent className="p-4"><h3 className="text-lg font-semibold mb-2">{t.nav[3]}</h3><p>{t.gallery}</p></CardContent></Card>

      <Card><CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{t.nav[4]}</h3>
        <p className="mb-4">{t.contact}</p>
        <form className="space-y-3" action="https://formspree.io/f/xkndvgza" method="POST">
          <Input name="name" placeholder={t.form.name} required />
          <Input name="email" type="email" placeholder={t.form.email} required />
          <Textarea name="message" placeholder={t.form.message} required />
          <Button type="submit">{t.form.send}</Button>
        </form>
      </CardContent></Card>

      <Card><CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">📍 {t.map}</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.4762671293566!2d18.9150724!3d47.0034414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769cfc36137863d%3A0xe5d132d222b2ed90!2zUmFjw6RsbWFzLCBGw7YgxZV0IDYxLCDDqW1vciAxMjU1!5e0!3m2!1shu!2shu!4v1718700000000" width="100%" height="300" loading="lazy" className="rounded-xl border" allowFullScreen></iframe>
      </CardContent></Card>

      <Card><CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">📄 Dokumentumok / Documents</h3>
        <p>{t.documents}</p>
        <ul className="list-disc pl-5 mt-2">
          <li><a href="/docs/ajanlat.pdf" className="text-blue-600 underline">Árajánlat minta / Sample Quote (PDF)</a></li>
          <li><a href="/docs/engedelyeztetes.pdf" className="text-blue-600 underline">Engedélyeztetési tájékoztató / Permit Info (PDF)</a></li>
        </ul>
      </CardContent></Card>

      <div className="text-sm text-gray-500">{t.satisfaction}</div>
    </div>
  );
}
