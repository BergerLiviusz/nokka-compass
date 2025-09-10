import { motion } from "framer-motion";
import { useRef, useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const TestimonialCards = () => {
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  const testimonials = [
    {
      imgUrl: testimonial1,
      testimonial: "A NOKKA tanácsadó csapata kiváló szakmai támogatást nyújtott stratégiai projekteinkhez. Az ő elemzéseik alapvetően alakították át döntéshozatali folyamatainkat.",
      author: "Dr. Kovács Anna - Gazdasági Igazgató"
    },
    {
      imgUrl: testimonial2,
      testimonial: "A doktori képzési programjuk során szerzett tudás és módszertan jelentősen hozzájárult kutatási munkám minőségéhez. Professzionális és gyakorlatorientált oktatás.",
      author: "Nagy Péter - PhD hallgató"
    },
    {
      imgUrl: testimonial3,
      testimonial: "A NOKKA csapata magas színvonalú kutatási és tanácsadói szolgáltatásokat nyújt. Különösen értékelem a módszertani precizitást és gyakorlati alkalmazhatóságot.",
      author: "Dr. Szabó László - Egyetemi tanár"
    },
    {
      imgUrl: testimonial4,
      testimonial: "A vállalati tanácsadás terén nyújtott szolgáltatásaik kiemelkedőek. Segítségükkel sikerült optimalizálnunk üzleti folyamatainkat és növelni hatékonyságunkat.",
      author: "Horváth Mária - Ügyvezető Igazgató"
    },
    {
      imgUrl: testimonial5,
      testimonial: "A kutatásmódszertani képzések során megszerzett ismeretek nélkülözhetetlenek voltak disszertációm elkészítéséhez. Kiváló elméleti és gyakorlati felkészítés.",
      author: "Tóth Gábor - Kutatási Asszisztens"
    },
    {
      imgUrl: testimonial6,
      testimonial: "Több évtizedes tapasztalattal a hátam mögött kijelenthetem, hogy a NOKKA szakmai standardjai és kutatási eredményei példaértékűek a tudományos közösségben.",
      author: "Prof. Dr. Varga István - Emeritus Professzor"
    }
  ];

  return (
    <div className="grid place-content-center overflow-hidden px-4 py-8">
      <div className="relative h-[320px] w-[280px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            imgUrl={testimonial.imgUrl}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
            handleShuffle={handleShuffle}
            position={order.indexOf(index)}
            totalCards={testimonials.length}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author, totalCards }: any) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: any) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: any) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 100) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  // Calculate position based on index in stack
  const getTransformValues = (pos: number, total: number) => {
    const angle = (pos * 60) / total; // Spread cards in fan
    const xOffset = pos * 15; // Horizontal spacing
    const yOffset = pos * 5; // Slight vertical offset
    const rotation = pos * 3 - 6; // Rotation range
    const scale = 1 - pos * 0.05; // Slight size decrease for depth
    
    return {
      x: `${xOffset}px`,
      y: `${yOffset}px`,
      rotate: `${rotation}deg`,
      scale,
      zIndex: total - pos
    };
  };

  const { x, y, rotate, scale, zIndex } = getTransformValues(position, totalCards);
  const draggable = position === 0;

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate, x, y, scale }}
      drag
      dragElastic={0.25}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.3,
      }}
      className={`absolute left-0 top-0 grid h-[320px] w-[280px] select-none place-content-center space-y-3 rounded-xl border-2 border-border bg-card/20 p-4 shadow-lg backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="pointer-events-none mx-auto h-20 w-20 rounded-full border-2 border-border bg-muted overflow-hidden">
        <img
          src={imgUrl}
          alt={`Image of ${author}`}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-center text-sm italic text-muted-foreground line-clamp-4">
        "{testimonial}"
      </span>
      <span className="text-center text-xs font-medium text-primary">
        {author}
      </span>
    </motion.div>
  );
};

export default TestimonialCards;