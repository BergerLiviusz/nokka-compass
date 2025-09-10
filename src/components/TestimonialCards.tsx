import { motion } from "framer-motion";
import { useRef, useState } from "react";

const TestimonialCards = () => {
  const [order, setOrder] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-12">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        <Card
          imgUrl="/logos/corvinus-logo.png"
          testimonial="A NOKKA kutatásai alapvetően megváltoztatták a magyar gazdaságpolitika megközelítését. Minden reggel az ő elemzéseikkel kezdem a napomat."
          author="Dr. Kovács Anna - Gazdasági Elemző @ MNB"
          handleShuffle={handleShuffle}
          position={order[0]}
        />
        <Card
          imgUrl="/logos/elte-logo.png"
          testimonial="Főnököm azt hiszi, értek a közgazdaságtanhoz. Őszintén szólva, csak a NOKKA kutatásait olvasom rendszeresen."
          author="Nagy Péter - Pénzügyi Tanácsadó @ OTP Bank"
          handleShuffle={handleShuffle}
          position={order[1]}
        />
        <Card
          imgUrl="/logos/mta-logo.png"
          testimonial="Hihetetlen, hogy ez ingyenes. Ha a NOKKA havi 500 000 forintba kerülne, akkor is megérné minden fillért. A következő gyerekemet NOKKA-ra keresztelem."
          author="Dr. Szabó László - Kutatásvezető @ Corvinus Egyetem"
          handleShuffle={handleShuffle}
          position={order[2]}
        />
      </div>
    </div>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author }: any) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: any) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: any) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
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
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-border bg-card/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-border bg-muted p-4 flex items-center justify-center">
        <img
          src={imgUrl}
          alt={`Image of ${author}`}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-center text-lg italic text-muted-foreground">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-primary">
        {author}
      </span>
    </motion.div>
  );
};

export default TestimonialCards;