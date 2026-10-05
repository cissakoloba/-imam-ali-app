export type Grade="sahih"|"hasan";
export type HadithCard={id:string;corpus:string;reference:string;grade:Grade;gradeSource:string;textAr:string;textFr:string};
export const HADITH_FEED:HadithCard[]=[
{id:"b1",corpus:"Sahih al-Bukhari",reference:"1",grade:"sahih",gradeSource:"Al-Bukhari",textAr:"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",textFr:"Les actions ne valent que par les intentions."},
{id:"m16",corpus:"Sahih Muslim",reference:"16",grade:"sahih",gradeSource:"Muslim",textAr:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",textFr:"Que celui qui croit en Allah et au Jour dernier dise du bien ou qu’il se taise."},
{id:"b6018",corpus:"Sahih al-Bukhari",reference:"6018",grade:"sahih",gradeSource:"Al-Bukhari",textAr:"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",textFr:"Nul d’entre vous n’est croyant tant qu’il n’aime pas pour son frère ce qu’il aime pour lui-même."}];
export function isPublishable(h:HadithCard){return Boolean(h.corpus&&h.reference&&(h.grade==="sahih"||h.grade==="hasan"))}
export function hadithOfDay(date=new Date()){const p=HADITH_FEED.filter(isPublishable),i=Math.abs(date.getFullYear()*400+date.getMonth()*31+date.getDate())%p.length;return p[i]!}