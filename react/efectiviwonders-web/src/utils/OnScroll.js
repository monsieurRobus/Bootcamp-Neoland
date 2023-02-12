window.onscroll = fixHeaderSize()

const fixHeaderSize = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header").style.fontSize = "30px";
      } else {
        document.querySelector("header").style.fontSize = "90px";
      }
}