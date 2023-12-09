"use client";

import styles from "@/components/styles";

const Info = () => {
  return (
    <div className="absolute w-screen h-screen ">
      <div style={styles.watchDiv} className="absolute"></div>
      
      <div style={styles.menDiv} className="absolute"></div>
      
      <div style={styles.bagDiv} className="absolute"></div>
      
      <div style={styles.jewelDiv} className="absolute"></div>
    </div>
  );
};

export default Info;
