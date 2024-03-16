import { useTranslations } from "next-intl";

import p1 from "../../../assets/imgs/tiles/1-glasses.png";
import p10 from "../../../assets/imgs/tiles/10-handcuffs.png";
import p11 from "../../../assets/imgs/tiles/11-hammer.png";
import p2 from "../../../assets/imgs/tiles/2-coffee.png";
import p3 from "../../../assets/imgs/tiles/3-notebook.png";
import p4 from "../../../assets/imgs/tiles/4-ledger.png";
import p5 from "../../../assets/imgs/tiles/5-file.png";
import p6 from "../../../assets/imgs/tiles/6-pen-2.jpg";
import p7 from "../../../assets/imgs/tiles/7-sheet.png";
import p8 from "../../../assets/imgs/tiles/8-envelop.png";
import p9 from "../../../assets/imgs/tiles/9-pencils.png";

const data = () => {
  const t = useTranslations("services");
  return Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    img: require(`../../../assets/imgs/tiles/${i + 1}-${t<any>(`services.${i + 1}.alt`)}.png`),
    title: t<any>(`services.${i + 1}.title`),
    text: t<any>(`services.${i + 1}.text`),
    alt: t<any>(`services.${i + 1}.alt`),
    left: t<any>(`services.${i + 1}.left`),
    bottom: t<any>(`services.${i + 1}.bottom`),
    right: t<any>(`services.${i + 1}.right`),
    position: t<any>(`services.${i + 1}.position`),
  }));
};
export default data;
