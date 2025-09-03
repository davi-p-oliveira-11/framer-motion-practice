import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const text: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            eligendi harum excepturi, nam saepe consectetur rem, fugit dolore
            adipisci nisi omnis nemo ipsum rerum voluptatem in. Magni cumque
            ipsa est fuga rem perspiciatis esse vel voluptates voluptatibus nemo
            nostrum cupiditate modi corporis error neque, molestiae omnis,
            consequatur itaque dolorum nesciunt, voluptas sint saepe!
            Voluptates, natus dignissimos? Laborum molestias quis modi sed
            dignissimos quas assumenda quo explicabo ad, itaque magni quos
            repellat molestiae esse doloremque odit dolores possimus id nesciunt
            voluptates nam libero exercitationem natus ipsa? In ipsum aliquam et
            ducimus consequatur libero consectetur sunt ex, a aperiam, optio
            vero maiores?`;

  return (
    <div className="h-[200vh] p=[20px]">
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{ width: lineWidth, transition: "width 0.1s ease" }}
      />

      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="mt-[20px]">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
