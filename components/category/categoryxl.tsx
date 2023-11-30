
import Image from "next/image";
import styles from "../styles";
const Categoryxl = () => {
  return (
    <div className="w-3/4 mx-auto h-screen">
      <div className="w-full h-1/2 flex justify-center">
        <div
          style={styles.bottomBorder}
          className="mr-2 w-3/4 h-3/4 relative"
        >
          <Image
            src="/wedding.webp"
            alt="D'efiti Wedding Image"
            fill={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={styles.bottomBorder}
          className="ml-2 w-3/4 h-3/4 relative"
        >
          <Image
            src="/suit.webp"
            alt="D'efiti Suits Image"
            fill={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-center">
      <div
        style={styles.bottomBorder}
        className="mr-2 w-3/4 h-3/4 relative"
      >
        <Image
          src="/designer.webp"
          alt="D'efiti Designer Image"
          fill={true}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={styles.bottomBorder}
        className="ml-2 w-3/4 h-3/4 relative"
      >
        <Image
          src="/streetwear.webp"
          alt="D'efiti Streetwear Image"
          fill={true}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    </div>
  );
};

export default Categoryxl;
