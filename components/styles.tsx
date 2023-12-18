{
  /* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */
}

const styles = {
  textColor: {
    color: "rgb(255, 55, 0)",
  },
  backColor: {
    backgroundColor: "rgb(255, 55, 0)",
  },
  bottomBorder: {
    borderBottom: "2px solid rgb(255, 55, 0)",
  },
  roundBorder: {
    borderRadius: "50%",
    borderTop: "1px solid rgb(255, 55, 0)",
  },
  roundBottomBorder: {
    borderRadius: "50%",
    borderBottom: "1px solid rgb(255, 55, 0)",
  },
  watchDiv: {
    borderRadius: "5%",
    backgroundColor: "rgb(255, 55, 0)",
    width: "15vw",
    height: "42vh",
    top: "100px",
    left: "3px",
  },
  menDiv: {
    borderRadius: "5%",
    backgroundColor: "rgb(255, 55, 0)",
    width: "15vw",
    height: "38vh",
    bottom: "0px",
    left: "150px",
  },
  bagDiv: {
    borderRadius: "5%",
    backgroundColor: "rgb(255, 55, 0)",
    width: "15vw",
    height: "38vh",
    bottom: "120px",
    right: "30px",
  },
  jewelDiv: {
    borderRadius: "5%",
    backgroundColor: "rgb(255, 55, 0)",
    width: "15vw",
    height: "28vh",
    top: "120px",
    right: "30px",
  },
  animatedDiv: {
    bottom: 0,
    right: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "#f15bb5",
    overflow: "hidden",
  },
  svg: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    animation: "rotate 20s linear infinite", // Apply the rotate animation
    transformOrigin: "50% 50%", // Center of the SVG
  },
  links: {
    bottom: 20,
    right: 20,
  },
  linkItem: {
    textDecoration: "none",
    color: "black",
    marginLeft: "1em",
    cursor: "pointer",
  },
  icon: {
    display: "inline-block",
    height: "1em",
    margin: "0 0 -0.1em 0.3em",
  },

  wave: {
    overflow: "hidden",
  },
  waveAfter: {
    content: "''",
    willChange: "transform",
    overflow: "hidden",
    right: 0,
    top: 0,
    bottom: 0,
    left: "10vw",
    background: "rgb(255, 55,0)",
    "--mask":
      "radial-gradient(75.15px at 50% 101.5px, #000 99%, #0000 101%) calc(50% - 70px) 0/140px 100%, radial-gradient(75.15px at 50% -66.5px, #0000 99%, #000 101%) 50% 35px/140px 100% repeat-x",
    WebkitMask: "var(--mask)",
    mask: "var(--mask)",
    animation: "wave 10s linear infinite alternate",
  },
  pearlsmHeight:{
    height: "150vh",
  }
};

export default styles;
